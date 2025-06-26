import { createContext, useContext, useMemo, useState, useEffect } from "react";
import type { ReactNode } from "react";
interface QueryContextType {
  pastQueries: string[];
  addQuery: (query: string) => void;
  csvData: any[];
  setCsvData: (data: any[]) => void;
}

const QueryContext = createContext<QueryContextType>({
  pastQueries: [],
  addQuery: () => {},
  csvData: [],
  setCsvData: () => {},
});

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [pastQueries, setPastQueries] = useState<string[]>(() => {
    const savedQueries = localStorage.getItem("pastQueries");
    return savedQueries ? JSON.parse(savedQueries) : [];
  });

  const [csvData, setCsvData] = useState<any[]>([]);

  const addQuery = (query: string) => {
    const updatedQueries = [query, ...pastQueries.slice(0, 19)];
    setPastQueries(updatedQueries);
    localStorage.setItem("pastQueries", JSON.stringify(updatedQueries));
  };

  useEffect(() => {
    localStorage.setItem("pastQueries", JSON.stringify(pastQueries));
  }, [pastQueries]);

  const contextValue = useMemo(
    () => ({ pastQueries, addQuery, csvData, setCsvData }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pastQueries, csvData]
  );

  return (
    <QueryContext.Provider value={contextValue}>
      {children}
    </QueryContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useQueryContext = () => {
  return useContext(QueryContext);
};