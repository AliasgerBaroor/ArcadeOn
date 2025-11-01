import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { passActions } from "../redux/slices/passSlice";
import { Pass } from "../redux/slices/passSlice";
import { fetchPasses } from "../services/passService";

export function usePasses() {
    const dispatch = useDispatch();
    
    const {
        data: pass,
        isLoading,
        error,
        refetch,
    } = useQuery<Pass[], Error>({
        queryKey: ["pass"],
        queryFn: fetchPasses,
        staleTime: 5 * 60 * 1000,
        retry: 1,
    });

    useEffect(() => {
        if (pass && pass.length > 0) {
            dispatch(passActions.setPass(pass[0]));
        }
    }, [pass, dispatch]);

    return { pass, isLoading, error, refetch };
}
