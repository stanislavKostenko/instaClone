import { BaseProvider } from '../../providers/Base.provider';
import { appConfigs } from '../../configs/configs';
import { Media } from '../../types/media.types';

export class DetailsProvider extends BaseProvider {
    fetchMedia(id: string): Promise<Media> {
        return this.get<Media>(`media/${id}?access_token=${appConfigs.token}`);
    }
    fetchComments(id: string): Promise<Array<Comment>> {
        return this.get<Array<Comment>>(`media/${id}/comments?access_token=${appConfigs.token}`);
    }
}

export const detailsProvider = new DetailsProvider();