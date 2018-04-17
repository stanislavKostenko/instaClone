import { UserProfileResponse } from '../types/user.types';
import { appConfigs } from '../configs/configs';

export class UserProvider {
  getUserInfo(): Promise<UserProfileResponse> {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `${appConfigs.apiUrl}/users/self/?access_token=${appConfigs.token}`);

        xhr.send();

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              const response = JSON.parse(xhr.response);
              resolve(response.data);
            } else {
              reject(xhr.response);
            }
          }
        };
      }
    );
  }

  getUserPicture(): Promise<UserProfileResponse> {
      return new Promise(
          (resolve, reject) => {
              const xhr = new XMLHttpRequest();

              xhr.open
              ('GET', `https://scontent.cdninstagram.com
                  /vp/c643410d271b157abbb07beb4676a72e/5B561997/t51
                  .2885-19/s150x150/16585024_257339374691894_8254743696268853248_a.jpg`);

              xhr.send();

              xhr.onreadystatechange = () => {
                  if (xhr.readyState === 4) {
                      if (xhr.status === 200) {
                          const response = JSON.parse(xhr.response);
                          resolve(response.data);
                      } else {
                          reject(xhr.response);
                      }
                  }
              };
          }
      );
  }
}