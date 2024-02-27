import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// cuz in express we connect to the mongo url once but in next.js we need to call it on each server action cuz it workes in a serverless environment , meaning stateless functions , without maintaining a continuous connection to the db
// this would create too many connection instances , hence make global cached instance
let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('Missing MONGOD_URL');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
        dbName: 'pixMorph', bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn;
}