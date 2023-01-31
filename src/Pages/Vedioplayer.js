import React from 'react'

function Vedioplayer() {
    return (
        <div>
            <main x-data="video()" x-init="init()">
                <iframe class="bg-black mx-auto" x-ref="player" src="https://player.vimeo.com/video/386831576" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </main>
        </div>
    )
}

export default Vedioplayer
