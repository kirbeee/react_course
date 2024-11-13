import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react";

export const albumsApi = createApi({
   reducerPath: 'albums',
    baseQuery: fakeBaseQuery({
        baseUrl: 'http://localhost:3005',

    }),
    endpoints (builder){
        return{
            fetchAlbums: builder.query({
                query: (user) => {
                    return{
                        url: `/albums`,
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                },
            })
        }
    }
});

export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi}