import { axiosInstance } from './axiosInstance';

interface GetNoticeListData {
  offset?: number;
  limit?: number;
  address?: string | null;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: string;
}

interface GetShopNoticeListData {
  shop_id: string;
  offset: number;
  limit: number;
}

export interface GetShopNoticeData {
  shop_id: string;
  notice_id: string;
}

export interface ShopNoticeData {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description?: string;
}

export async function getNoticeList(
  params: GetNoticeListData | URLSearchParams
) {
  const config = {
    params: params,
  };
  const response = await axiosInstance.get(`/notices`, config);
  return response.data;
}

export async function getShopNoticeList(
  shop_id: string,
  params: GetShopNoticeListData
) {
  const response = await axiosInstance.get(`/shops/${shop_id}/notices`, {
    params,
  });
  return response.data;
}

export async function getShopNotice({ shop_id, notice_id }: GetShopNoticeData) {
  const response = await axiosInstance.get(
    `/shops/${shop_id}/notices/${notice_id}`
  );
  return response.data;
}

export async function postShopNotice(shop_id: string, body: ShopNoticeData) {
  const response = await axiosInstance.post(`/shops/${shop_id}/notices`, body);
  return response.data;
}

export async function putShopNotice(
  shop_id: string,
  notice_id: string,
  body: ShopNoticeData
) {
  const response = await axiosInstance.put(
    `/shops/${shop_id}/notices/${notice_id}`,
    body
  );
  return response.data;
}

// const noticeAPI = {
// getNoticeList: async (params: GetNoticeListData | URLSearchParams) => {
//   try {
//     const config = {
//       params: params,
//     };
//     const response = await axiosInstance.get(`/notices`, config);
//     return response.data;
//   } catch (error) {
//     const handleError = handleAxiosError(error);
//     throw handleError;
//   }
// },
// getShopNoticeList: async (shop_id: string, params: GetShopNoticeListData) => {
//   try {
//     const response = await axiosInstance.get(`/shops/${shop_id}/notices`, {
//       params,
//     });
//     return response.data;
//   } catch (error) {
//     handleAxiosError(error);
//   }
// },
// getShopNotice: async ({ shop_id, notice_id, token }: GetShopNoticeData) => {
//   const headers = {
//     Authorization: token ? `Bearer ${token}` : '',
//   };
//   try {
//     const response = await axiosInstance.get(
//       `/shops/${shop_id}/notices/${notice_id}`,
//       { headers }
//     );
//     return response.data;
//   } catch (error) {
//     handleAxiosError(error);
//   }
// },
// postShopNotice: async (shop_id: string, body: ShopNoticeData) => {
//   const headers = {
//     Authorization: `Bearer ${localStorage.getItem('token')}`,
//   };
//   try {
//     const response = await axiosInstance.post(
//       `/shops/${shop_id}/notices`,
//       body,
//       { headers }
//     );
//     return response.data;
//   } catch (error) {
//     handleAxiosError(error);
//   }
// },
// putShopNotice: async (
//   shop_id: string,
//   notice_id: string,
//   body: ShopNoticeData
// ) => {
//   const headers = {
//     Authorization: `Bearer ${localStorage.getItem('token')}`,
//   };
//   try {
//     const response = await axiosInstance.put(
//       `/shops/${shop_id}/notices/${notice_id}`,
//       body,
//       {
//         headers,
//       }
//     );
//     return response.data;
//   } catch (error) {
//     handleAxiosError(error);
//   }
// },
// };

// export default noticeAPI;
