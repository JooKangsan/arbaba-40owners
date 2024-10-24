import { GetServerSideProps } from 'next';
import CustomizedNoticeList from '@/components/pageComponents/NoticeList/CustomizedNoticeList';
import NoticeListView from '@/components/pageComponents/NoticeList/NoticeListView';
import { useResetSearchOnHome } from '@/hooks/useResetSearchOnHome';
import { getNoticeList } from '@/lib/api/noticeAPI';

export default function Home(data: NoticeListResponseData) {
  useResetSearchOnHome(data);

  return (
    <>
      <CustomizedNoticeList />
      <NoticeListView initialData={data} title={'전체 공고'} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getNoticeList({ limit: 6 });

  // 서버 사이드에서 isPassed 계산
  const noticesWithIsPassed = data.notices.map((notice: Notice) => ({
    ...notice,
    isPassed: new Date() > new Date(notice.startsAt),
  }));

  return {
    props: {
      ...data,
      notices: noticesWithIsPassed,
    },
  };
};
