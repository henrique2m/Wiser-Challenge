import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { AuthUserState } from '../store/ducks/auth/types';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

interface AuthUser {
  AuthUser: AuthUserState | undefined;
}

const Routes: React.FC = () => {
  const [userAuth, setUserAuth] = useState(false);

  const { AuthUser } = useSelector((state: AuthUser) => state);

  useMemo(() => {
    if (!AuthUser) return;

    const { data } = AuthUser;

    if (data !== null) {
      setUserAuth(true);
    } else {
      setUserAuth(false);
    }
  }, [AuthUser]);

  return (
    <Switch>
      <Route path="/" exact component={userAuth ? Home : SignIn} />
    </Switch>
  );
};

export default Routes;
