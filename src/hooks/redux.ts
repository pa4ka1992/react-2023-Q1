import { type TAppDispatch, type TRootState } from '@/store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const useAppDispatch = () => useDispatch<TAppDispatch>();
const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export { useAppDispatch, useAppSelector };
