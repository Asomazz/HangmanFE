package com.example.basicnetworkingandapi

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch

class PetViewModel : ViewModel() {

    private val petClient = RetrofitHelper.getInstance().create(PetClient::class.java)
    private val petRepository = PetRepository(petClient)

    var pets by mutableStateOf(listOf<PetDto>())

    init {
        fetchPets()
    }
    fun fetchPets() {
        viewModelScope.launch {
            try {
                pets = petRepository.getAllPets()
            } catch (e: Exception) {
            }
        }
    }
}