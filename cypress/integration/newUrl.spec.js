const sites = [
  "www.google.com.br",
  "www.facebook.com",
  "www.google.com",
  // "www.youtube.com",
  // "www.globo.com",
  // "www.uol.com.br",
  // "www.googleweblight.com",
  // "www.xvideos.com",
  // "www.mercadolivre.com.br",
  // "www.live.com",
  // "www.whatsapp.com",
  // "www.yahoo.com",
  // "www.netflix.com",
  // "www.wikipedia.org",
  // "www.twitter.com",
  // "www.instagram.com",
  // "www.goo.gl",
  // "www.americanas.com.br",
  // "www.olx.com.br",
  // "www.answers.yahoo.com",
  // "www.mediafire.com",
  // "www.abril.com.br",
  // "www.letras.mus.br",
  // "www.msn.com",
  // "www.correios.com.br",
  // "www.vivo.com.br",
  // "www.pinterest.com",
  // "www.xnxx.com",
  // "www.tim.com.br",
  // "www.bit.ly",
  // "www.samsung.com.br",
  // "www.onlinevideoconverter.com",
  // "www.obix.pro",
  // "www.sp.gov.br",
  // "www.pornhub.com",
  // "www.xvideosporno.blog.br",
  // "www.wordpress.com",
  // "www.folha.uol.com.br",
  // "www.techtudo.com.br",
  // "www.uptodown.com",
  // "www.microsoft.com",
  // "www.terra.com.br",
  // "www.tvefamosos.uol.com.br",
  // "www.xhamster.com",
  // "www.bol.uol.com.br",
  // "www.mega.nz",
  // "www.brainly.com.br",
  // "www.pensador.com",
  // "www.esporte.uol.com.br",
  // "www.aliexpress.com",
  // "www.twitch.tv",
  // "www.accuweather.com",
  // "www.cameraprive.com",
  // "www.oi.com.br",
  // "www.lifetds.com",
  // "www.linkedin.com",
  // "www.redtube.com",
  // "www.tumblr.com",
  // "www.casasbahia.com.br",
  // "www.xvideos.blog.br",
  // "www.pornodoido.com",
  // "www.fazenda.gov.br",
  // "www.suamusica.com.br",
  // "www.bet365.com",
  // "www.magazineluiza.com.br",
  // "www.noticias.uol.com.br",
  // "www.estadao.com.br",
  // "www.ig.com.br",
  // "www.sambaporno.com",
  // "www.cifraclub.com.br",
  // "www.itau.com.br",
  // "www.otvfoco.com.br",
  // "www.reddit.com",
  // "www.everesttech.net",
  // "www.jusbrasil.com.br",
  // "www.claro.com.br",
  // "www.bb.com.br",
  // "www.xvideos-cdn.com",
  // "www.submarino.com.br",
  // "www.youtu.be",
  // "www.mercadolivre.com",
  // "www.tecmundo.com.br",
  // "www.santander.com.br",
  // "www.tudogostoso.com.br",
  // "www.rasius.pro",
  // "www.cdnsagaz.com",
  // "www.adhoc2.net",
  // "www.clicrbs.com.br",
  // "www.support-ip.com",
  // "www.r7.com",
  // "www.gbmods.co",
  // "www.wikia.com",
  // "www.tsyndicate.com",
  // "www.saraiva.com.br",
  // "www.netshoes.com.br",
  // "www.buscape.com.br",
  // "www.gearbest.com",
  // "www.outbrain.com",
  // "www.blogosfera.uol.com.br",
  // "www.bing.com",
];

sites.forEach((element) => {
  context("Short url creation test", () => {
    it("Test in home", () => {
      cy.visit("http://localhost:8080/");
      cy.get("input").type(element);
      cy.get(".search").click();
      cy.contains("https://delc.herokuapp.com/");
    });
  });
});
