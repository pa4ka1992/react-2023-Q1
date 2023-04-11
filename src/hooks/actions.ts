import { useAppDispatch } from '@/hooks/redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as reducers from '~store/reducers';

const actions = {
  ...reducers.homePageActions,
  ...reducers.formPageActions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(actions, dispatch);
};
