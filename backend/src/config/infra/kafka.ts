import { Kafka, Partitioners } from "kafkajs";
import type { Consumer, Producer } from 'kafkajs';

export const kafka = new Kafka({
    clientId: 'Oddiville',
    brokers: ['localhost:9092'],
});

export const producer: Producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
});
export const consumer: Consumer = kafka.consumer({ groupId: 'oddiville-group' });

export async function bootstrap() {
    await producer.connect();
    await consumer.connect();
}


// docker-compose up -d
// docker-compose down
