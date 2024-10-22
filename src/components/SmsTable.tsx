import { useContext, useEffect } from 'react';

import { Queries } from '@/api/queries';
import { SmsContext } from '@/context/SmsContext';
import SmsPagination from './smsTable/SmsPagination';
import SmsTableBody from './smsTable/SmsTableBody';
import SmsTableHead from './smsTable/SmsTableHead';
import Loader from './Loader';

const SmsTable = () => {
  const smsContext = useContext(SmsContext);
  if (!smsContext) {
    throw new Error('smsContext must be used within an AuthProvider');
  }
  const {
    tableIsLoading,
    smsData,
    smsTableData,
    setSmsTableData,
    setTableIsLoading,
    setCurrentPage,
    setIsError,
    currentPage,
    activeNumber,
    searchFecth,
    activeSort,
    dateValue,
  } = smsContext;

  const getMessages = () => {
    if (smsData && activeNumber) {
      setTableIsLoading(true);

      try {
        Queries.getMessages(activeNumber, currentPage, dateValue, activeSort, searchFecth).then(
          (res) => {
            setSmsTableData(res);
            setTableIsLoading(false);

            if (!res.data) {
              setTableIsLoading(true);

              setIsError(true);
            }
          },
        );
      } catch (error) {
        setTableIsLoading(true);

        setIsError(true);
      }
    }
  };

  useEffect(() => {
    getMessages();
  }, [smsData, currentPage, activeNumber, searchFecth, activeSort, dateValue]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeNumber]);

  if (tableIsLoading) {
    return (
      <div className="w-full">
        <Loader />
      </div>
    );
  }

  return smsTableData?.data.length ? (
    <div className="flex flex-col w-full gap-[24px] max-w-[900px]">
      <div className="flex flex-col w-full rounded-[25px] overflow-hidden shadow-tableShadow">
        <SmsTableHead />
        <SmsTableBody />
      </div>
      {smsTableData.meta.last_page > 1 ? <SmsPagination /> : null}
    </div>
  ) : (
    <h1 className="mt-[20px] text-[32px] leading-[120%] font-semibold text-textBlack">
      Нет результатов!
    </h1>
  );
};

export default SmsTable;
