import { axiosInstance } from './axiosInstance';

interface GetAlertData {
  user_id: string;
  offset?: number;
  limit?: number;
  alert_id?: string;
}

export async function getAlerts({ user_id, offset, limit }: GetAlertData) {
  const params = {
    offset,
    limit,
  };
  const response = await axiosInstance.get(`/users/${user_id}/alerts`, {
    params,
  });
  return response.data;
}

export async function putAlerts({ user_id, alert_id }: GetAlertData) {
  const requestBody = {};
  const response = await axiosInstance.put(
    `/users/${user_id}/alerts/${alert_id}`,
    requestBody
  );
  return response.data;
}
