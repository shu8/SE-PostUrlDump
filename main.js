const accounts = {};

$('#go').click(function () {
  const networkId = $('#networkId').val();
  const accessToken = $('#accessToken').val();
  const filter = '!0S2A5ipm(pczxWJLGNzYzyy4l';
  const key = 'c8aSGAR0rp5RUK)dVriyCA((';

  $.getJSON(`http://api.stackexchange.com/2.2/users/${networkId}/associated`, function (j) {
    for (let i = 0; i < j.items.length; i++) {
      accounts[j.items[i]['site_url']] = j.items[i]['user_id'];
    }

    $.each(accounts, function (k, v) {
      const site = k.replace(/http.?:\/\//, '');
      $.getJSON(`https://api.stackexchange.com/2.2/users/${v}/posts?filter=${filter}&key=${key}&access_token=${accessToken}&site=${site}`, function (j2) {
        for (let x = 0; x < j2.items.length; x++) {
          $('#posts').append(j2.items[x]['score'] + ' - <a href="' + j2.items[x]['link'] + '">' + j2.items[x]['title'] + '</a><br>');
        }
      });
    });
  });
});
