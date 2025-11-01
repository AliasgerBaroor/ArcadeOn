import { validRoutes } from '../types/navigation';
import { useRouter } from "expo-router";

export enum SuperadminTabScreens {
  Dashboard = "superadmin-dashboard",
  AdminOrders = "superadmin-orders",
  Chambers = "superadmin-chambers",
  Production = "superadmin-production",
}
export enum AdminTabScreens {
  Dashboard = "admin-dashboard",
  AdminOrders = "admin-orders",
  Chambers = "admin-chambers",
  Production = "admin-production",
}
export enum UserTabScreens {
  Home = "home",
  Games = "games",
  Reward = "reward",
  Me = "me",
}

export type AppTabScreen =
  | SuperadminTabScreens
  | AdminTabScreens
  | UserTabScreens;

  function isSuperadminTab(route: string): route is SuperadminTabScreens {
    return Object.values(SuperadminTabScreens).includes(route as SuperadminTabScreens);
  }
  
  function isAdminTab(route: string): route is AdminTabScreens {
    return Object.values(AdminTabScreens).includes(route as AdminTabScreens);
  }
  
  function isUserFreeTab(route: string): route is UserTabScreens {
    return Object.values(UserTabScreens).includes(route as UserTabScreens);
  }
  

  function getQuery(params?: Record<string, any>) {
    if (!params) return "";
    const search = Object.entries(params)
      .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
      .join("&");
    return search ? `?${search}` : "";
  }
  
  export function useAppNavigation() {
    const router = useRouter();
  
    function goTo(route: AppTabScreen | keyof validRoutes, params?: Record<string, any>) {
      if (isSuperadminTab(route)) {
        router.push((`/(superadmin)/(tabs)/${route}${getQuery(params)}`) as any);
        return;
      }
      if (isAdminTab(route)) {
        router.push((`/(admin)/(tabs)/${route}${getQuery(params)}`) as any);
        return;
      }
      if (isUserFreeTab(route)) {
        router.push((`/(user_free)/(tabs)/${route}${getQuery(params)}`) as any);
        return;
      }
      router.push((`${route}${getQuery(params)}`) as any);
    }
  
    function replaceWith(route: AppTabScreen | keyof validRoutes, params?: Record<string, any>) {
      if (isSuperadminTab(route)) {
        router.replace((`/(superadmin)/(tabs)/${route}${getQuery(params)}`) as any);
        return;
      }
      if (isAdminTab(route)) {
        router.replace((`/(admin)/(tabs)/${route}${getQuery(params)}`) as any);
        return;
      }
      if (isUserFreeTab(route)) {
        router.replace((`/(user_free)/(tabs)/${route}${getQuery(params)}`) as any);
        return;
      }
      router.replace((`${route}${getQuery(params)}`) as any);
    }
  
    function resetTo(route: AppTabScreen | keyof validRoutes, params?: Record<string, any>) {
      replaceWith(route, params);
    }
  
    return { goTo, replaceWith, resetTo };
  }