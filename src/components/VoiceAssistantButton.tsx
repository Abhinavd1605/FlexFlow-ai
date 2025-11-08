'use client';

import { useState, useRef, useEffect } from 'react';
import { Mic, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { soundManager } from '@/lib/sounds';

export const VoiceAssistantButton = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const stopTimeoutRef = useRef<NodeJS.Timeout>();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        if (audioChunksRef.current.length === 0) return;
        
        setIsProcessing(true);
        try {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
          const reader = new FileReader();

          // Convert blob to array buffer first
          const audioArrayBuffer = await audioBlob.arrayBuffer();
          // Convert array buffer to base64
          const base64Audio = btoa(
            new Uint8Array(audioArrayBuffer).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          );

          // Format data for n8n workflow
          const requestData = {
            json: {
              audio: base64Audio
            }
          };

          // Send to n8n webhook
          const response = await fetch('https://vishnusidd2.app.n8n.cloud/webhook-test/voice-agent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData),
          });

          if (!response.ok) {
            throw new Error('Failed to process audio');
          }

          // Play the response
          const responseBuffer = await response.arrayBuffer();
          const audioBlobResponse = new Blob([responseBuffer], { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlobResponse);
          const audioElement = new Audio(audioUrl);
          await audioElement.play();
          
          soundManager.play('softClick', 0.3);
        } catch (error) {
          console.error('Error processing audio:', error);
        } finally {
          setIsProcessing(false);
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      soundManager.play('softClick', 0.3);
      
      // Auto-stop after 10 seconds of continuous recording
      stopTimeoutRef.current = setTimeout(() => {
        stopRecording();
      }, 10000);
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Please allow microphone access to use this feature.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      
      if (stopTimeoutRef.current) {
        clearTimeout(stopTimeoutRef.current);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      if (stopTimeoutRef.current) {
        clearTimeout(stopTimeoutRef.current);
      }
    };
  }, []);

  const handleButtonClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div className="relative group">
      <Button
        onClick={handleButtonClick}
        disabled={isProcessing}
        className="gradient-primary font-semibold rounded-full px-6 py-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 relative"
      >
        {isProcessing ? (
          <Loader2 className="h-6 w-6 animate-spin" />
        ) : (
          <>
            <Mic className="h-6 w-6 mr-2" />
            <span>Talk to AI</span>
            <span className="absolute -inset-1.5 bg-gradient-to-r from-amber-400/30 to-violet-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </>
        )}
        {isRecording && (
          <span className="absolute flex h-3 w-3 top-1 right-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        )}
      </Button>
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Ask me anything in Telugu
      </div>
    </div>
  );
};
