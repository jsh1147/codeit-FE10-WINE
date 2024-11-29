import { instance } from './instance';
export interface PatchWineData {
    name: string;
    price: number;
    region: string;
    type: 'RED' | 'WHITE' | 'SPARKLING';
    image: string;
}

export const deleteReview = async (reviewId: number) => {
    try {
        const response = await instance.delete(`/reviews/${reviewId}`);
        return response.data;
    } catch (error) {
        console.error('리뷰 삭제 실패:', error);
        throw error;
    }
};
export const deleteWine = async (wineId: number) => {
    try {
        const response = await instance.delete(`/wines/${wineId}`);
        return response.data;
    } catch (error) {
        console.error('와인 삭제 실패:', error);
        throw error;
    }
};

export const getWine = async (wineId: number) => {
    try{
        const response = await instance.get(`/wines/${wineId}`)
        return response.data;
    }catch(error){
        console.log('와인등록 정보 불러오기 오류')
    }
}

export const patchWine = async (
    wineId: number,
    data: PatchWineData,
): Promise<void> => {
    try {
      const res = await instance.patch(`/wines/${wineId}`, data);
    } catch (err) {
      console.error(err);
      alert('와인 수정 중 오류가 발생했습니다.');
    }
};

