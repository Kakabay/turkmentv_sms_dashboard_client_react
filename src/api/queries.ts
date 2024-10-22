import baseUrl from '@/lib/baseUrl';
import { MessagesByTvAdmin } from '@/models/messagesByTvAdmis.model';
import { IMyTvAdmins } from '@/models/my.tv.admins.model';
import routes from '@/lib/routes';

export class Queries {
  // Sms ========================================================================================
  public static async getAdmins(): Promise<IMyTvAdmins> {
    const token = localStorage.getItem('access_token');

    return await fetch(`${baseUrl.SMS_SRC}${routes.myTvAdmins}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => res.json().then((res) => res as IMyTvAdmins));
  }

  public static async getMessages(
    id: number,
    current_page: number,
    dateValue: string,
    activeSort: string,
    searchFetch: string,
  ): Promise<MessagesByTvAdmin> {
    const token = localStorage.getItem('access_token');

    return await fetch(
      `${baseUrl.SMS_SRC}${routes.messagesByTvAdmin(id)}?per_page=60&page=${current_page}${
        dateValue ? '&filter_by_date=' + dateValue.toString() : ''
      }${searchFetch ? '&search=' + searchFetch : ''}&order=${activeSort}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    ).then((res) => res.json().then((res) => res as MessagesByTvAdmin));
  }
}
