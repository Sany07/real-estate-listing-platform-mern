import { useSelector } from 'react-redux';

export default function useAuth() {
  const auth = useSelector((state) => state.auth);

  if (auth?.accessToken && auth?.email) {
    return true;
  } else {
    return false;
  }
}