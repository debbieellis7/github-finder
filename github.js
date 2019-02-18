class Github {
 constructor() {
  this.client_id = '25b84326e33bbf6f4cfc';
  this.client_secret = 'f63f69bf157574c9b5f214d5bbc83f16f619937b';
  this.repos_count = 5;
  this.repos_sort = 'created: asc';
 }

 async getUser(user) {
  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const profile = await profileResponse.json();
  const repos = await repoResponse.json();

  return {
   profile,
   repos
  }
 }
}