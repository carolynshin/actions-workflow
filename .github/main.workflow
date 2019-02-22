workflow "3\\. Branch management workflow" {
  on = "pull_request"
  resolves = [
    "5\\. branch cleanup",
    "jessfraz/branch-cleanup-action@master",
  ]
}

action "5\\. branch cleanup" {
  uses = "jessfraz/branch-cleanup-action@master"
}
