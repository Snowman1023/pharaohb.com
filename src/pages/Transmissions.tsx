import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { VideoCard } from '@/components/transmissions/VideoCard';
import { ShortCard } from '@/components/transmissions/ShortCard';
import {
  transmissions,
  shorts,
  categories,
  getTransmissionsByCategory,
  type CategoryId
} from '@/data/transmissions';
import { albums } from '@/data/albums';
import { streamingPlatforms } from '@/data/musicData';
import { Music as MusicIcon, Youtube } from 'lucide-react';
import brandSymbol from '@/assets/brand-symbol.png';

const Transmissions = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [activePlayer, setActivePlayer] = useState<Record<string, 'spotify' | 'youtube'>>({});

  const filteredTransmissions = getTransmissionsByCategory(activeCategory);
  const getPlayerType = (albumSlug: string) => activePlayer[albumSlug] || 'spotify';

  return (
    <PageLayout>
      <PageHeader
        title="Transmissions"
        subtitle="Audio & Video"
        orientationText="Healing frequencies, affirmations, spoken word, and teachings for the soul."
      />

      <SectionContainer>
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 font-cinzel text-xs tracking-widest uppercase border transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary/50 hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── ALBUMS VIEW ── */}
        {activeCategory === 'albums' ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {albums.map((album) => {
                const hasSpotify = !!album.spotifyEmbedId;
                const hasYoutube = !!album.youtubeVideoId;
                const hasBoth = hasSpotify && hasYoutube;
                const currentPlayer = getPlayerType(album.slug);

                return (
                  <div key={album.slug} className="group flex flex-col h-full">
                    {/* Album Cover */}
                    <div className="relative aspect-square overflow-hidden mb-6 border border-border">
                      <img
                        src={album.image}
                        alt={album.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/40 group-hover:bg-background/60 transition-colors duration-300" />
                    </div>

                    {/* Album Info */}
                    <div className="flex flex-col flex-1">
                      <div className="mb-4">
                        <h3 className="font-cinzel text-2xl text-foreground group-hover:text-primary transition-colors">
                          {album.title}
                        </h3>
                        <p className="font-cormorant text-sm text-primary/70 italic">
                          {album.year}
                        </p>
                      </div>

                      <p className="font-cormorant text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                        {album.description}
                      </p>

                      {/* Player Toggle */}
                      {hasBoth && (
                        <div className="flex gap-2 mb-4">
                          <button
                            onClick={() => setActivePlayer(prev => ({ ...prev, [album.slug]: 'spotify' }))}
                            className={`flex items-center gap-2 px-4 py-2 font-cinzel text-xs tracking-wider border transition-colors ${
                              currentPlayer === 'spotify'
                                ? 'border-primary text-primary bg-primary/10'
                                : 'border-border text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            <MusicIcon className="w-4 h-4" />
                            Spotify
                          </button>
                          <button
                            onClick={() => setActivePlayer(prev => ({ ...prev, [album.slug]: 'youtube' }))}
                            className={`flex items-center gap-2 px-4 py-2 font-cinzel text-xs tracking-wider border transition-colors ${
                              currentPlayer === 'youtube'
                                ? 'border-primary text-primary bg-primary/10'
                                : 'border-border text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            <Youtube className="w-4 h-4" />
                            YouTube
                          </button>
                        </div>
                      )}

                      {/* Player Embed */}
                      <div className="mt-auto">
                        {hasSpotify && currentPlayer === 'spotify' && (
                          <iframe
                            src={`https://open.spotify.com/embed/album/${album.spotifyEmbedId}?utm_source=generator&theme=0`}
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-lg"
                          />
                        )}

                        {hasYoutube && currentPlayer === 'youtube' && (
                          <div className="aspect-video">
                            <iframe
                              src={`https://www.youtube.com/embed/${album.youtubeVideoId}`}
                              width="100%"
                              height="100%"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              loading="lazy"
                              className="rounded-lg"
                            />
                          </div>
                        )}

                        {!hasSpotify && !hasYoutube && (
                          <div className="bg-muted/30 border border-border p-6">
                            <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                              <MusicIcon className="w-5 h-5" />
                              <span className="font-cormorant text-sm italic">
                                Streaming links coming soon
                              </span>
                            </div>
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                              {album.tracks.map((track, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-3 sm:gap-4 py-2 border-b border-border/50 last:border-0"
                                >
                                  <span className="font-cinzel text-xs text-primary/50 w-6">
                                    {(index + 1).toString().padStart(2, '0')}
                                  </span>
                                  <span className="font-cormorant text-sm text-foreground/80">
                                    {track}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Streaming Links */}
            <div className="flex items-center justify-center gap-4 py-12">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <img src={brandSymbol} alt="" className="w-8 h-8 object-contain opacity-70" />
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-cinzel text-xl md:text-2xl text-foreground mb-8">
                Listen On
              </h2>
              <div className="flex items-center justify-center gap-8 md:gap-12">
                {streamingPlatforms.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-cinzel text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Long-form Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredTransmissions.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>

            {/* Empty State */}
            {filteredTransmissions.length === 0 && (
              <div className="text-center py-16">
                <p className="font-cormorant text-lg text-muted-foreground">
                  No transmissions in this category yet.
                </p>
              </div>
            )}
          </>
        )}
      </SectionContainer>

      {/* Shorts Section - Only show if there are shorts and not on albums tab */}
      {shorts.length > 0 && activeCategory !== 'albums' && (
        <>
          {/* Divider with brand symbol */}
          <div className="flex items-center justify-center gap-4 py-12">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <img src={brandSymbol} alt="" className="w-8 h-8 object-contain opacity-70" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          <SectionContainer>
            {/* Section Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-px bg-primary" />
                <span className="font-cinzel text-xs tracking-widest uppercase text-primary">
                  Shorts
                </span>
                <div className="w-12 h-px bg-primary" />
              </div>
              <p className="font-cormorant text-lg text-muted-foreground">
                Quick transmissions. Under 60 seconds.
              </p>
            </div>

            {/* Shorts Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {shorts.map((short) => (
                <ShortCard key={short.id} short={short} />
              ))}
            </div>

            {/* Link to YouTube Shorts */}
            <div className="text-center mt-8">
              <a
                href="https://www.youtube.com/@PharaohB-1111/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-cinzel text-sm tracking-widest text-primary hover:opacity-70 transition-opacity"
              >
                View All Shorts on YouTube
                <span>→</span>
              </a>
            </div>
          </SectionContainer>
        </>
      )}
    </PageLayout>
  );
};

export default Transmissions;
