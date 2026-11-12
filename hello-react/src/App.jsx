rigin https://github.com/GoodPineApple/oz-react07.git
PS C:\Users\aweth\Documents\oz-react\day29> 
PS C:\Users\aweth\Documents\oz-react\day29> 
PS C:\Users\aweth\Documents\oz-react\day29> cd ..\cafe-order
>> git fetch upstream
>> git restore --source=upstream/main --staged --worktree :/
>> git commit -m "DAY29 시작"
remote: Enumerating objects: 15, done.
remote: Counting objects: 100% (15/15), done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 8 (delta 2), reused 8 (delta 2), pack-reused 0 (from 0)
Unpacking objects: 100% (8/8), 1.84 KiB | 4.00 KiB/s, done.
From https://github.com/GoodPineApple/cafe-order
   98abc27..afe3731  main       -> upstream/main
[main 4a7a6c0] DAY29 시작
 4 files changed, 30 insertions(+), 23 deletions(-)
PS C:\Users\aweth\Documents\oz-react\cafe-order> git add .
>> git commit -m "DAY29 담기"
>> git push
>> Write-Host "https://github.com/mj-cha/cafe-order/commit/$(git rev-parse HEAD)"
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
``