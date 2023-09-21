create policy "Enable read access for all users"
on "public"."players_sports"
as permissive
for all
to authenticated
using (true)
with check (true);



