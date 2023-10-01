import { useEffect, useRef, useState } from 'react'

import waveSvg from '@/assets/icons/wave.svg'
import playSvg from '@/assets/icons/play.svg'
import pauseSvg from '@/assets/icons/pause.svg'
import { convertCurrentTime } from '@/utils/convertCurrentTime'

import { IMessageAudioProps } from './types'
import './styles.scss'

export const MessageAudio = ({ audioSrc }: IMessageAudioProps) => {
  const audioElem = useRef<any>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const togglePlay = () => {
    if (isPlaying) {
      audioElem.current.pause()
    } else {
      audioElem.current.play()
    }
  }

  useEffect(() => {
    audioElem.current.volume = '0.01'
    audioElem.current.addEventListener(
      'playing',
      () => {
        setIsPlaying(true)
      },
      false,
    )
    audioElem.current.addEventListener(
      'ended',
      () => {
        setIsPlaying(false)
        setProgress(0)
        setCurrentTime(0)
      },
      false,
    )
    audioElem.current.addEventListener(
      'pause',
      () => {
        setIsPlaying(false)
      },
      false,
    )
    audioElem.current.addEventListener('timeupdate', () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0
      setCurrentTime(audioElem.current.currentTime)
      setProgress((audioElem.current.currentTime / duration) * 100)
    })
  }, [])

  return (
    <div className="message__audio">
      <audio preload="auto" ref={audioElem} src={audioSrc} />
      <div className="message__audio-progress" style={{ width: `${progress}%` }} />
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button type="button" onClick={togglePlay}>
            {isPlaying ? (
              <img alt="Pause svg" src={pauseSvg} />
            ) : (
              <img alt="Play svg" src={playSvg} />
            )}
          </button>
        </div>
        <div className="message__audio-wave">
          <img alt="Wave svg" src={waveSvg} />
        </div>
        <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
      </div>
    </div>
  )
}
