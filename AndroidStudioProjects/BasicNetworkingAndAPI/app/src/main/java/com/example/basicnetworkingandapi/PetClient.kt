package com.example.basicnetworkingandapi

import retrofit2.http.GET

interface PetClient {
    @GET("pets")
    suspend fun getAllPets() : List<PetDto>

}
