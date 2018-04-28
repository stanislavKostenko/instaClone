import { appConfigs } from '../configs/configs';

abstract class BaseProvider {
    protected get<T>(url: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const uri = `${appConfigs.apiUrl}/${url}`;

            xhr.open('GET', uri);
            xhr.send();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const response = JSON.parse(xhr.response);
                        resolve(response.data);
                    } else {
                        reject(xhr);
                    }
                }
            };

        });
    }
}

export { BaseProvider };