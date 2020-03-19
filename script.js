console.log('test');
const linksNaarFotos = [
    'https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e8/Veigar_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414203657',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FViktor_0.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg04.deviantart.net%2Fee52%2Fi%2F2015%2F180%2F0%2F4%2Fleague_of_legends_yasuo_fanart_by_rosolino-d8v4n8q.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette4.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F1%2F14%2FVel%2527Koz_OriginalLoading.jpg%2Frevision%2Flatest%3Fcb%3D20160518230601&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F4%2F4b%2FKatarina_OriginalCentered.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F1215%3Fcb%3D20180414203326&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcgamesn.com%2Fwp-content%2Fuploads%2F2019%2F12%2Fleague_of_legends_sett_mecha_kingdoms_splash.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg1.wikia.nocookie.net%2F__cb20150226214732%2Fleagueoflegends%2Fimages%2F3%2F35%2FAkali_HeadhunterLoading.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fe929hePavos%2Fmaxresdefault.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FTristana_0.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F6%2F67%2FAatrox_OriginalCentered.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F1215%3Fcb%3D20180414201907&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette3.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F4%2F4d%2FLissandra_OriginalLoading.jpg%2Frevision%2Flatest%3Fcb%3D20160517024655&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FAshe_0.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-hdUYmHD9coo%2FT7aBW5nJtMI%2FAAAAAAAABJw%2F48BSXuirLmw%2Fs1600%2FLeague%252Bof%252BLegends%252BDarius%252BSplash.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-fTo84Cc4QGw%2FUwHJ8ONT6zI%2FAAAAAAAABXE%2FdSD6PPg_h84%2Fs1600%2FEzreal-League-of-Legends-Wallpaper-full-HD-7.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F7%2F7d%2FKayn_OriginalCentered.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F1215%3Fcb%3D20180414184150&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2Fa%2Fa6%2FJax_OriginalCentered.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F1215%3Fcb%3D20180414203245&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FKassadin_0.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2Fb%2Fbb%2FGaren_OriginalCentered.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F1215%3Fcb%3D20180414202112&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FHeimerdinger_0.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F0%2F0f%2FJhin_OriginalCentered.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F1215%3Fcb%3D20180414203247&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDd_h_q7Xe2k%2Fmaxresdefault.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FMordekaiser_4.jpg&f=1&nofb=1',
    'https://cdn.vox-cdn.com/thumbor/a3l9lWN0Eax1CAftZ9XmD_3CTzQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19799974/_Base.jpg',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FPantheon_6.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FNocturne_0.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FRengar_2.jpg&f=1&nofb=1'
];

const houder = document.getElementById('container');

function plaatsFoto(url) {
    let item = document.createElement('div');
    item.className = 'item';
    let deFoto = document.createElement('img');
    deFoto.src = url;
    deFoto.alt = 'League of legends Champion'
    item.append(deFoto);
    houder.append(item);
}

for(let i=linksNaarFotos.length; i>0; i--) {
    let randomImg = Math.floor(Math.random()*linksNaarFotos.length)
    plaatsFoto(linksNaarFotos[randomImg]);
    linksNaarFotos.splice(randomImg, 1);
}