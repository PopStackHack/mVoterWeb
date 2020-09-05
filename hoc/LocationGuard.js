import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { hasFullLocation } from '../utils/helpers';

const LocationGuard = (props) => {
  const {
    children,
  } = props;

  const router = useRouter();

  useEffect(() => {
    const isCandidateRoute = router.route === '/candidates';

    if (!hasFullLocation() && isCandidateRoute) {
      router.replace('/location');
    }
  }, [router]);

  return children;
}

export default LocationGuard;
