create policy "Enable insert for authenticated users only"
on "public"."players_teams"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable insert for authenticated users only"
on "public"."teams"
as permissive
for insert
to authenticated
with check (true);



