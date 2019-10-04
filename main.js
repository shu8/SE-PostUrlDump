function getPosts(user, site, page, cb) {
  const accessToken = $('#accessToken').val();
  const filter = '!0S2A5ipm(pczxWJLGNzYzyy4l';
  const key = 'c8aSGAR0rp5RUK)dVriyCA((';

  $.getJSON(`https://api.stackexchange.com/2.2/users/${user}/posts?filter=${filter}&key=${key}&access_token=${accessToken}&site=${site}&page=${page}&pagesize=100`, j => {
    for (let x = 0; x < j.items.length; x++) {
      $('#posts').append(j.items[x].score + ' - <a href="' + j.items[x].link + '">' + j.items[x].title + '</a><br>');
    }

    if (j.has_more) getPosts(user, site, page + 1, () => console.log('Fetched more posts'));
    else return cb();
  });
}

$('#go').click(() => {
  const accounts = {};
  const networkId = $('#networkId').val();

  $.getJSON(`http://api.stackexchange.com/2.2/users/${networkId}/associated`, j => {
    for (let i = 0; i < j.items.length; i++) {
      accounts[j.items[i]['site_url']] = j.items[i]['user_id'];
    }

    $.each(accounts, (k, v) => {
      const site = k.replace(/http.?:\/\//, '');
      getPosts(v, site, 1, () => console.log('Fetched all posts'));
    });
  });
});
