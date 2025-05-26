package com.example.basicnetworkingandapi

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage

@Composable
fun PetCard(pet: PetDto, modifier: Modifier = Modifier){

    Card(
        modifier = Modifier
            .padding(8.dp)
            .fillMaxWidth()
            .background(
                brush = Brush.verticalGradient(
                    colors = listOf(Color(0xFFB3E5FC), Color(0xFF0288D1))
                )
            ),

        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = "Name: ${pet.name}")
            Text(text = "Gender: ${pet.gender}")
            Text(text = "Age: ${pet.age}")
            Text(text = "Adopted: ${if (pet.adopted) "Yes" else "No"}")
            AsyncImage(
                model = pet.image,
                contentDescription = null,
            )
        }
    }

}
