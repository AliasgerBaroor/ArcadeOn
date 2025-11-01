import { useSelector } from "react-redux";
import { selectorMap, SelectorKeys, SelectorResult } from "../redux/autoSelectors";


export function useSimpleSelector<K extends SelectorKeys>(key: K): SelectorResult<K> {
  const fn = selectorMap[key];
  if (!fn) throw new Error(`Unknown selector key: ${key}`);
  return useSelector(fn) as SelectorResult<K>;
}
