import { REST, Routes } from 'discord.js';

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("MTMzMjM0MzA2ODI2MjkyODQxNA.GAtS_y.si07kRh91W2FmNzhTFLYVwIp2FhDEmCteBjMRk");

  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1332343068262928414"),
     { body: commands }
    );
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }