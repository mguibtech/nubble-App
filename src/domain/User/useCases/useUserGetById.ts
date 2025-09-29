import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useUserGetById(id: number) {
  // const [user, setUser] = useState<User>();
  // const [error, setError] = useState<boolean | null>(null);
  // const [loading, setLoading] = useState(false);

  // const getUserById = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const _user = await userService.getUserById(id);
  //     setUser(_user);
  //   } catch (er) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   getUserById();
  // }, [getUserById]);

  const {data, isError, isLoading} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getUserById(id),
  });

  return {
    user: data,
    isError,
    isLoading,
  };
}
