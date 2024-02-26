import React from 'react'
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import Link from 'next/link'

const video = ({data}) => {
    const STYLES = { videoIframeContainer: { padding: '56.25% 0 0 0', position: 'relative', }, videoIframe: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' } }

    return (
        <section>
            <div style={STYLES.videoIframeContainer}>
                <iframe
                    title="vimeo-player"
                    src={data.url}
                    width="640"
                    height="360"
                    allowFullScreen
                    style={STYLES.videoIframe}
                    >
                    </iframe>
            </div>
        </section>
    )
}
  
export default video