const fs = require('fs');

// Generate a simple bass pulse (Ta-dum)
const sampleRate = 44100;
const duration = 2.5; // seconds
const numSamples = sampleRate * duration;

// WAV Header
const buffer = Buffer.alloc(44 + numSamples * 2);

// RIFF chunk descriptor
buffer.write('RIFF', 0);
buffer.writeUInt32LE(36 + numSamples * 2, 4);
buffer.write('WAVE', 8);

// fmt sub-chunk
buffer.write('fmt ', 12);
buffer.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
buffer.writeUInt16LE(1, 20); // AudioFormat (1 for PCM)
buffer.writeUInt16LE(1, 22); // NumChannels (1)
buffer.writeUInt32LE(sampleRate, 24); // SampleRate
buffer.writeUInt32LE(sampleRate * 2, 28); // ByteRate
buffer.writeUInt16LE(2, 32); // BlockAlign
buffer.writeUInt16LE(16, 34); // BitsPerSample

// data sub-chunk
buffer.write('data', 36);
buffer.writeUInt32LE(numSamples * 2, 40);

// generate waveform: a deep sine sweep (pulse) with two distinct hits ("Ta", "Dum")
for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;

    let sample = 0;

    // First hit (Ta): 0.1s to 0.4s
    if (t > 0.1 && t < 0.6) {
        const env = Math.exp(-6 * (t - 0.1));
        const freq = 60 * Math.exp(-2 * (t - 0.1));
        sample += env * Math.sin(2 * Math.PI * freq * t) * 0.4;
    }

    // Second hit (Dum): 0.6s to 2.0s
    if (t > 0.6 && t < 2.5) {
        const env = Math.exp(-1.5 * (t - 0.6));
        const freq = 45 * Math.exp(-1 * (t - 0.6));
        sample += env * Math.sin(2 * Math.PI * freq * t) * 0.8;
    }

    // Add sub-harmonics for depth
    if (t > 0.6 && t < 2.5) {
        const env = Math.exp(-2 * (t - 0.6));
        const freq = 25;
        sample += env * Math.sin(2 * Math.PI * freq * t) * 0.8;
    }

    // clamp
    if (sample > 1.0) sample = 1.0;
    if (sample < -1.0) sample = -1.0;

    const intSample = Math.max(-32768, Math.min(32767, Math.floor(sample * 32767)));
    buffer.writeInt16LE(intSample, 44 + i * 2);
}

const base64 = buffer.toString('base64');
fs.writeFileSync('bass.b64', "data:audio/wav;base64," + base64);
console.log("Done");
