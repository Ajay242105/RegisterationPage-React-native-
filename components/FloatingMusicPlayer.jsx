
import { View, Text, TouchableOpacity, Image } from 'react-native';
import TrackPlayer, { State } from 'react-native-track-player';
import { images } from '../constants';

const FloatingMusicPlayer = ({
  songsList,
  currentIndex,
  playbackState,
  onPressPlayPause,
  onPressVisible,
}) => {
  console.log('FloatingMusicPlayer rendered');
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        width: '90%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 20,
        borderTopWidth: 0,
        justifyContent: 'space-between',      
        zIndex: 999,
      }}
      onPress={onPressVisible}
    >
      <View className="flex-row items-center">
        {songsList.length > 0 && currentIndex < songsList.length && (
          <>
            <Image
              source={{ uri: songsList[currentIndex].artwork }}
              style={{ width: 30, height: 30, borderRadius: 5 }}
            />
            <View className="ml-[10]">
              <Text className="text-white">{songsList[currentIndex].title}</Text>
              <Text className="text-white text-xs">{songsList[currentIndex].artist}</Text>
            </View>
          </>
        )}
      </View>

      <TouchableOpacity onPress={onPressPlayPause}>
        <Image
          source={playbackState.state === State.Playing ? images.pause : images.play}
          style={{ width: 20, height: 20, tintColor: 'white' }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default FloatingMusicPlayer;