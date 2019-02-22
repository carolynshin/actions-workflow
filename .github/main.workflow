workflow "3\\. Branch management workflow" {
  on = "pull_request"
  resolves = ["5\\. branch cleanup"]
}

action "5\\. branch cleanup" {
  uses = "jessfraz/branch-cleanup-action@master"
}
