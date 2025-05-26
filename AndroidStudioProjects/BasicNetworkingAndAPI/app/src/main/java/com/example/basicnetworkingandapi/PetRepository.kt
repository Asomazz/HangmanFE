package com.example.basicnetworkingandapi

class PetRepository(private val api: PetClient) {
    suspend fun getAllPets() = api.getAllPets()
}