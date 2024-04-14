import { ChangeEvent, useState, useCallback } from 'react';
import { useQuery, NetworkStatus } from '@apollo/client';
import { InView } from 'react-intersection-observer';
import { Box, SelectChangeEvent, TextField } from '@mui/material';
import { Card } from '../../features';
import { AppSelect } from '../../shared/ui';
import { LIST_LAUNCHES } from './query.ts';
import { StatusList } from '../../shared/constants.ts';
import { ILaunch } from '../../shared/types.ts';

export const LaunchList = () => {
  const [search, setSearch] = useState<string>('');
  const [status, setStatus] = useState<string>(StatusList[0]);
  const [fullyLoaded, setFullyLoaded] = useState<boolean>(false);

  const { data, networkStatus, error, fetchMore, variables } = useQuery(LIST_LAUNCHES, {
    notifyOnNetworkStatusChange: true,
    variables: {
      offset: 0,
      limit: 30
    }
  });

  const _selectChange = useCallback((event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  }, []);

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val?.length >= 3 || val === '') {
      setSearch(val);
    }
  };

  if (networkStatus === NetworkStatus.loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const filteredLaunches = data?.launches?.docs?.filter(
    (launch: ILaunch) =>
      (launch?.name?.toLowerCase()?.includes(search) ||
        launch?.details?.toLowerCase()?.includes(search)) &&
      (status.toLowerCase() === 'all' ||
        (status.toLowerCase() === 'success' ? launch.success : !launch.success))
  );

  return (
    <div>
      <Box
        mb={4}
        pt={4}
        display="flex"
        justifyContent="space-between"
        flexDirection={{
          xs: 'column',
          md: 'row'
        }}>
        <Box
          width={{
            xs: '100%',
            md: '320px'
          }}
          mr={3}
          mb={4}>
          <TextField
            fullWidth
            placeholder="Search by name and description"
            variant="outlined"
            onChange={_onChange}
          />
        </Box>

        <AppSelect onChange={_selectChange} value={status} />
      </Box>

      <Box
        sx={{
          display: 'grid',
          justifyItems: 'center',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gridGap: 20
        }}>
        {filteredLaunches.map((launch: ILaunch) => (
          <Card key={launch.id} {...launch} />
        ))}
      </Box>
      {networkStatus !== NetworkStatus.fetchMore &&
        data?.launches?.docs?.length % variables!.limit === 0 &&
        !fullyLoaded && (
          <InView
            threshold={0}
            onChange={async (inView) => {
              if (inView) {
                const result = await fetchMore({
                  variables: {
                    offset: data?.launches?.docs?.length + variables?.offset
                  }
                });
                setFullyLoaded(!result.data?.launches?.docs?.length);
              }
            }}
          />
        )}
      <Box>Footer</Box>
    </div>
  );
};
