package com.example.basicnetworkingandapi

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.lifecycle.viewmodel.compose.viewModel

@Composable
fun PetList(
    viewModel: PetViewModel = viewModel(),
    modifier: Modifier = Modifier
) {
    val pets = viewModel.pets

    LazyColumn(modifier = modifier.fillMaxSize()) {
        items(pets) { pet ->
            PetCard(pet)
        }
    }
}
