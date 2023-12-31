create policy "Enable insert for authenticated users only"
on "storage"."objects"
as permissive
for all
to authenticated
using (true)
with check (true);


create policy "Give users authenticated access to folder 1qv96sy_0"
on "storage"."objects"
as permissive
for select
to authenticated
using (((bucket_id = 'players'::text) AND ((storage.foldername(name))[1] = 'private'::text) AND (auth.role() = 'authenticated'::text)));


create policy "Give users authenticated access to folder 1qv96sy_1"
on "storage"."objects"
as permissive
for insert
to authenticated
with check (((bucket_id = 'players'::text) AND ((storage.foldername(name))[1] = 'private'::text) AND (auth.role() = 'authenticated'::text)));


create policy "Give users authenticated access to folder 1qv96sy_2"
on "storage"."objects"
as permissive
for update
to authenticated
using (((bucket_id = 'players'::text) AND ((storage.foldername(name))[1] = 'private'::text) AND (auth.role() = 'authenticated'::text)));


create policy "Give users authenticated access to folder 1qv96sy_3"
on "storage"."objects"
as permissive
for delete
to authenticated
using (((bucket_id = 'players'::text) AND ((storage.foldername(name))[1] = 'private'::text) AND (auth.role() = 'authenticated'::text)));


create policy "Give users authenticated access to folder 1tmp4m_0"
on "storage"."objects"
as permissive
for select
to authenticated
using (((bucket_id = 'teams'::text) AND ((storage.foldername(name))[1] = 'public'::text) AND (auth.role() = 'authenticated'::text)));


create policy "Give users authenticated access to folder 1tmp4m_1"
on "storage"."objects"
as permissive
for insert
to authenticated
with check (((bucket_id = 'teams'::text) AND ((storage.foldername(name))[1] = 'public'::text) AND (auth.role() = 'authenticated'::text)));


create policy "Give users authenticated access to folder 1tmp4m_2"
on "storage"."objects"
as permissive
for delete
to authenticated
using (((bucket_id = 'teams'::text) AND ((storage.foldername(name))[1] = 'public'::text) AND (auth.role() = 'authenticated'::text)));


create policy "Give users authenticated access to folder 1tmp4m_3"
on "storage"."objects"
as permissive
for update
to authenticated
using (((bucket_id = 'teams'::text) AND ((storage.foldername(name))[1] = 'public'::text) AND (auth.role() = 'authenticated'::text)));



