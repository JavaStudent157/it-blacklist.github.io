import{r as e}from"./index.c1313823.js";const s="https://api.github.com/repos/it-blacklist/it-blacklist.github.io";async function r(t){return e({baseURL:s,method:"get",url:"/issues?state=all",params:{page:t.current,per_page:t.pageSize,labels:t.city,title:t.company}})}async function a(t){return e({baseURL:s,method:"get",url:`/issues/${t.id}`})}async function n(t){return e({baseURL:s,method:"get",url:`/issues/${t.id}/comments`})}export{a,n as b,r as g};