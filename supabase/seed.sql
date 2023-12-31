SET session_replication_role = replica;
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.5 (Ubuntu 15.5-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'be150791-3a09-42c1-9215-fe7682d18595', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"adricatena@gmail.com","user_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","user_phone":""}}', '2023-07-05 14:23:23.715174+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dc1572b9-4433-4ec4-b0a4-eb0d5ac1f323', '{"action":"login","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-07-05 14:47:25.588253+00', ''),
	('00000000-0000-0000-0000-000000000000', '36cacb62-5e66-4c65-ac44-16e8b3bb129e', '{"action":"login","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-07-05 14:47:25.593773+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ce5ab9bb-1097-4c2a-bb66-fb09b7b8241f', '{"action":"logout","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account"}', '2023-07-05 14:47:35.923069+00', ''),
	('00000000-0000-0000-0000-000000000000', '41132176-e2a1-41bf-86c3-41886b14a603', '{"action":"login","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-07-05 14:47:44.383199+00', ''),
	('00000000-0000-0000-0000-000000000000', '72a4878c-e9ba-46f8-bb6f-28c5bb870417', '{"action":"logout","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account"}', '2023-07-05 14:51:41.077186+00', ''),
	('00000000-0000-0000-0000-000000000000', '10d4b6ca-d66c-4f0c-b687-d6172f199b99', '{"action":"logout","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account"}', '2023-07-05 14:51:46.84751+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ff7d150d-c52d-43b5-b884-6e4b60d86a60', '{"action":"login","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-07-05 14:51:54.059814+00', ''),
	('00000000-0000-0000-0000-000000000000', '00bee26b-125d-47b7-ab1a-259ea17f14be', '{"action":"logout","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account"}', '2023-07-05 14:59:02.792839+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e0830733-1930-4291-8f42-e914c692fe23', '{"action":"login","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-07-05 14:59:09.129471+00', ''),
	('00000000-0000-0000-0000-000000000000', '613ae17b-8971-42d4-8d4e-6fac7e721c44', '{"action":"login","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-07-05 14:59:09.822109+00', ''),
	('00000000-0000-0000-0000-000000000000', '24de8a4f-f9e8-4acc-b78e-8eb46e8be681', '{"action":"login","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-09-06 00:36:21.170729+00', ''),
	('00000000-0000-0000-0000-000000000000', '9fb1c00a-7da1-410f-91b5-d05c50c921d2', '{"action":"logout","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account"}', '2023-09-06 01:09:26.67187+00', ''),
	('00000000-0000-0000-0000-000000000000', '06831830-bf26-4795-8f22-fb1b944ca6aa', '{"action":"login","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-09-06 13:27:55.756098+00', ''),
	('00000000-0000-0000-0000-000000000000', '1ec427f4-0358-4c4e-a7fa-83fd18321688', '{"action":"login","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-09-07 17:48:28.353378+00', ''),
	('00000000-0000-0000-0000-000000000000', '23d7d363-ea5c-43cf-8ceb-e57a55ccae2b', '{"action":"token_refreshed","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"token"}', '2023-09-12 22:32:43.08253+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e8e71261-9867-4a19-ab4c-4264cefa387a', '{"action":"token_revoked","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"token"}', '2023-09-12 22:32:43.084951+00', ''),
	('00000000-0000-0000-0000-000000000000', '3b208565-b3b3-4245-afd6-145d12f360cf', '{"action":"token_refreshed","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"token"}', '2023-09-12 22:32:44.847087+00', ''),
	('00000000-0000-0000-0000-000000000000', '23b9d246-6e1a-420a-8695-bddeff6c30ef', '{"action":"token_revoked","actor_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","actor_username":"adricatena@gmail.com","actor_via_sso":false,"log_type":"token"}', '2023-09-12 22:32:44.84772+00', ''),
	('00000000-0000-0000-0000-000000000000', '2bdec53f-adbc-4d61-ab6d-cd13e99a8f66', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"admin@admin.com","user_id":"6f73665c-2d24-4689-ad43-8e72766396a7","user_phone":""}}', '2023-09-26 20:41:45.891169+00', ''),
	('00000000-0000-0000-0000-000000000000', '621d8cfe-6656-4ab3-9aef-2ec5ea4bb14b', '{"action":"user_deleted","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"adricatena@gmail.com","user_id":"944c1aaa-b5ca-4ae8-aa8c-78ed22160fb4","user_phone":""}}', '2023-09-26 20:42:01.503358+00', ''),
	('00000000-0000-0000-0000-000000000000', '4285b97a-ac02-47d2-a1da-2bce484eb34b', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-09-26 20:43:12.154503+00', ''),
	('00000000-0000-0000-0000-000000000000', '4d1ddce8-5cc6-475d-aa45-9f48bfc05952', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-26 21:43:35.857701+00', ''),
	('00000000-0000-0000-0000-000000000000', 'da16af7d-34ec-486e-bb0d-774fa99fa65b', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-26 21:43:35.859621+00', ''),
	('00000000-0000-0000-0000-000000000000', '4987d82f-c76f-4471-af3d-880394f3e077', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-09-26 21:45:28.003191+00', ''),
	('00000000-0000-0000-0000-000000000000', '9ac6e2fd-c86e-47f7-9abf-4c3bc3094c53', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-26 22:43:18.157696+00', ''),
	('00000000-0000-0000-0000-000000000000', '7a3171b9-b355-4735-9546-b8ea1594092e', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-26 22:43:18.159446+00', ''),
	('00000000-0000-0000-0000-000000000000', '991ea508-c144-4010-b47b-cb1813f29080', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-26 23:04:50.279336+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b9483eba-8813-447e-a829-be73109b4979', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-26 23:04:50.280764+00', ''),
	('00000000-0000-0000-0000-000000000000', '7a44cdda-4aa4-4651-86a7-484665eb2e54', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-09-27 11:20:05.779341+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a9f5de99-ca61-4963-8a15-f65b17cbf99a', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-27 13:12:57.642155+00', ''),
	('00000000-0000-0000-0000-000000000000', '30a65248-5533-457c-bdfc-9e5a0336b69e', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-27 13:12:57.644366+00', ''),
	('00000000-0000-0000-0000-000000000000', '6204bd7a-ee1a-4b11-a26a-b9df5a22b0e1', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-27 15:02:01.602908+00', ''),
	('00000000-0000-0000-0000-000000000000', '2e3f0b10-01c8-4a1a-bcf6-849dfa558b78', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-27 15:02:01.604135+00', ''),
	('00000000-0000-0000-0000-000000000000', '6bed7dc4-5e7d-48bd-9654-3703749b82d3', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-27 17:26:24.591267+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c594bbca-4bc9-4ffd-bb40-d538411986d8', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-27 17:26:24.592461+00', ''),
	('00000000-0000-0000-0000-000000000000', '36bea34c-c77b-43aa-bbcf-bae133c2595d', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-27 19:33:37.158941+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd3409993-2087-43b2-8f68-629ed135c637', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-09-27 19:33:37.159575+00', ''),
	('00000000-0000-0000-0000-000000000000', '38d19bbe-c8a2-43a9-9445-38654dd3604d', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-02 12:53:39.432724+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f9523945-c627-4997-bf54-bcbade327a5e', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 18:50:08.674972+00', ''),
	('00000000-0000-0000-0000-000000000000', '330accde-8c18-4e18-b814-ea9573e90a43', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 18:50:08.675627+00', ''),
	('00000000-0000-0000-0000-000000000000', '42c48fbd-9632-49c5-a530-4f60bd8e8256', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 20:31:53.040951+00', ''),
	('00000000-0000-0000-0000-000000000000', '14697e5c-9722-4bc3-ad83-6b704495cabe', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 20:31:53.042237+00', ''),
	('00000000-0000-0000-0000-000000000000', '2999f2c3-e926-47d9-8152-458cd01dcc97', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 20:31:53.112278+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c43f9e81-3c97-45a1-a1c6-d7bdc089358c', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 20:31:53.112877+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ea6920ae-7723-458c-9bb0-5b3cc38ce0b9', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 20:31:55.013099+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b0814b08-7019-4cff-9017-344eba1e0e1e', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 20:31:55.014653+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf5673a1-8b5d-4d71-9971-208a3cece058', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 21:30:55.195823+00', ''),
	('00000000-0000-0000-0000-000000000000', '8fecf860-38be-41b5-932a-01d23ebf769b', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 21:30:55.197655+00', ''),
	('00000000-0000-0000-0000-000000000000', '6377beab-93b2-40ba-a5db-3ffe23e113f1', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 22:52:14.584109+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ad29f90d-6b8e-4135-ae7a-cc77bcbeefb5', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-02 22:52:14.585862+00', ''),
	('00000000-0000-0000-0000-000000000000', '3d9a0cc9-94fd-4f8e-bf57-24b73cb2e046', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-03 12:03:20.032597+00', ''),
	('00000000-0000-0000-0000-000000000000', '1dbf773e-ebe2-49fc-a7bf-6b674609d7cd', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-03 13:10:15.756069+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ff0ef930-bb57-479a-886d-dbfb2d05a491', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-03 13:10:15.756677+00', ''),
	('00000000-0000-0000-0000-000000000000', '0b60c64f-f0e0-4f05-943f-99652f28edf4', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-03 19:45:48.808399+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f8355879-d189-42d9-aa2b-25e5ee6be6af', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-03 19:45:48.811028+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c8c4d031-2d48-4c69-b319-e9ec787b2496', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-03 21:06:24.557177+00', ''),
	('00000000-0000-0000-0000-000000000000', '5f4d200a-6034-4a89-acc2-3ad178295c49', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-03 21:06:24.558514+00', ''),
	('00000000-0000-0000-0000-000000000000', '2e5c68d2-4038-41b0-ace9-07f405327035', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-03 22:08:09.927463+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a595edb1-7892-41c2-afef-0128a39cffbc', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-03 22:08:09.928823+00', ''),
	('00000000-0000-0000-0000-000000000000', '04534942-ce08-4942-9b50-bc2b7d2eef37', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 09:56:23.169639+00', ''),
	('00000000-0000-0000-0000-000000000000', '6345fd8c-b93e-4cb7-9f01-979e6eee8f67', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 09:56:23.170708+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b688be2d-9070-47de-a6e9-fcc4d65c7c62', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 12:15:16.725231+00', ''),
	('00000000-0000-0000-0000-000000000000', '2c1c3c04-1958-48ef-a6f5-5c82f317bfef', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 12:15:16.726776+00', ''),
	('00000000-0000-0000-0000-000000000000', '150a27be-59dd-41e3-be53-48796bccb9f6', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 13:13:20.023542+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a5ad56d5-2c49-45d5-880d-217616d9437f', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 13:13:20.025903+00', ''),
	('00000000-0000-0000-0000-000000000000', '0b9b96a0-c6c8-4fb7-b602-84d256cd0bda', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 14:11:29.506527+00', ''),
	('00000000-0000-0000-0000-000000000000', '2d8c4b01-cd50-4e4b-b4d6-8a314418a088', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 14:11:29.507641+00', ''),
	('00000000-0000-0000-0000-000000000000', '331df47a-cd4e-436e-8239-4847878c0140', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 15:09:39.141467+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd896fff1-9dd2-4a91-a0d5-c635a1d869be', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 15:09:39.143338+00', ''),
	('00000000-0000-0000-0000-000000000000', '40b3f9e0-523e-4add-b665-27ce035b3c60', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 17:39:09.75571+00', ''),
	('00000000-0000-0000-0000-000000000000', '896979e9-26da-479f-9e9a-aa932ff3664c', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-04 17:39:09.757206+00', ''),
	('00000000-0000-0000-0000-000000000000', '6f89e1f8-3071-4fe0-be01-034e5a13f456', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-05 10:28:52.372853+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cb3041e6-5f66-493f-bc93-d2a2e5f4d96b', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-05 12:08:43.077184+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f31d7312-cc55-4289-80e7-97f0f597ac04', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-05 12:08:43.077962+00', ''),
	('00000000-0000-0000-0000-000000000000', '604e4abc-337d-4409-b2ec-326551e06b61', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-05 20:07:59.635142+00', ''),
	('00000000-0000-0000-0000-000000000000', '7cf38a18-43c5-4c2d-9739-40bdbe233618', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-05 20:07:59.636408+00', ''),
	('00000000-0000-0000-0000-000000000000', '87a8ce0b-6ae4-4b95-b90b-0eb5c1e58d84', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-06 12:11:11.45139+00', ''),
	('00000000-0000-0000-0000-000000000000', '46dea6af-16eb-417c-923e-117460a1d65f', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-06 12:11:11.453971+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fed1db42-d263-43a9-9f3b-79c3fbeb5508', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-06 13:09:40.578076+00', ''),
	('00000000-0000-0000-0000-000000000000', '55d2dc03-947f-4e01-9142-7f3f4a3484b8', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-06 13:09:40.579916+00', ''),
	('00000000-0000-0000-0000-000000000000', '2ff74e71-814e-4f41-8b9a-f9f90c1a23db', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-06 14:44:26.695004+00', ''),
	('00000000-0000-0000-0000-000000000000', '9fea9731-d6a1-475f-8ed7-2c8ad90f01ea', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-06 14:44:26.695646+00', ''),
	('00000000-0000-0000-0000-000000000000', '95972c8b-e209-4e32-b474-1979fbe0e3a2', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-06 21:31:34.593232+00', ''),
	('00000000-0000-0000-0000-000000000000', '9c76a578-fd28-494d-a4b1-88634cdb69b5', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-06 22:32:43.734988+00', ''),
	('00000000-0000-0000-0000-000000000000', '7af8791c-bd55-4316-92fa-fcd281da0596', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-06 22:32:43.736601+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd3183da0-d112-4741-873d-284f5adb679d', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-08 23:41:58.727826+00', ''),
	('00000000-0000-0000-0000-000000000000', '4651a1e0-fd93-40b3-ab01-d126a812213c', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 02:54:56.294574+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dca995f1-84c2-4840-b6ea-ec1a0c1e3e9f', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 02:54:56.295218+00', ''),
	('00000000-0000-0000-0000-000000000000', '87b1ca34-f655-4a45-8a5b-227434012b53', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-09 11:57:50.53544+00', ''),
	('00000000-0000-0000-0000-000000000000', '48cf8d2c-a89c-42aa-9657-1dfe677de00d', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 12:34:14.772531+00', ''),
	('00000000-0000-0000-0000-000000000000', '8186f07e-736a-4bc3-96d8-728bb2f56b13', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 12:34:14.773273+00', ''),
	('00000000-0000-0000-0000-000000000000', '735e9096-f2e4-40c3-b94e-977aafa0af21', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 13:07:08.170261+00', ''),
	('00000000-0000-0000-0000-000000000000', '2389c796-13ce-4ede-87a6-bdaba8f5cb30', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 13:07:08.170944+00', ''),
	('00000000-0000-0000-0000-000000000000', '415f5c29-e4b0-47a5-93d9-482313f36c74', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 13:40:08.850175+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f6ce49f5-e1e1-4a0c-94bd-89f8612d63b6', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 13:40:08.851495+00', ''),
	('00000000-0000-0000-0000-000000000000', '2e6e4f1a-19ae-4155-83e7-e453858ad228', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 14:44:13.09565+00', ''),
	('00000000-0000-0000-0000-000000000000', '484998b6-7d52-4984-aede-223d0a5ef544', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 14:44:13.097426+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e987415e-9d98-45ad-84e8-34a72067c677', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 16:29:38.199263+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd7942cf5-8651-4b1d-8156-fd1b2de7bafa', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 16:29:38.201587+00', ''),
	('00000000-0000-0000-0000-000000000000', '982208ce-5e1f-4db3-a76a-2c53f96b9812', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 17:41:34.946513+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f4f25e90-d5e6-4bf7-8ba4-3b37277559bf', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 17:41:34.947727+00', ''),
	('00000000-0000-0000-0000-000000000000', '7d9e45ef-f53c-4264-9e34-e1ecd54c9ea5', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 19:03:02.885815+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd3347d1d-0812-4986-b2fa-41f42bd1e3ab', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 19:03:02.887112+00', ''),
	('00000000-0000-0000-0000-000000000000', '1c032849-b712-4446-a418-f3c22b2c367c', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 20:45:18.924245+00', ''),
	('00000000-0000-0000-0000-000000000000', '395ab530-4e01-47c3-adbb-f766ec38939a', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 20:45:18.925104+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ea770d34-7ffd-43a4-859f-d61f2ecc51c2', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 22:32:06.725401+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b0cc1e4e-c6dd-44e9-b876-83a43fadee62', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-09 22:32:06.726109+00', ''),
	('00000000-0000-0000-0000-000000000000', '49108ab4-1d60-498e-92f8-a33bc1ca5936', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 11:18:24.537365+00', ''),
	('00000000-0000-0000-0000-000000000000', '6c2b8438-5ab4-426b-b7b2-e343083ca064', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 11:18:24.538192+00', ''),
	('00000000-0000-0000-0000-000000000000', '7cebc694-eac3-4579-9649-14fa8efca0d2', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 12:18:25.43411+00', ''),
	('00000000-0000-0000-0000-000000000000', '4b477563-8fae-4d70-b3c3-e52ee01f9490', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 12:18:25.434735+00', ''),
	('00000000-0000-0000-0000-000000000000', '3af40377-6218-4fd1-b18a-6ff8fc866db6', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 13:17:51.812016+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ac6e6ac3-dfb8-42d6-9707-676d9d7aceb9', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 13:17:51.812673+00', ''),
	('00000000-0000-0000-0000-000000000000', '43e4d4e1-e006-4fde-aa6f-84ce76f29d0e', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 14:16:16.22006+00', ''),
	('00000000-0000-0000-0000-000000000000', '511f27d3-bfcb-4f34-bc30-63b5d3e69952', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 14:16:16.222088+00', ''),
	('00000000-0000-0000-0000-000000000000', '51a811d7-1595-4a4f-9d38-1796978cd855', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 15:45:52.789283+00', ''),
	('00000000-0000-0000-0000-000000000000', '2a4732c0-2ea3-4b42-aa92-2f4dae88ae1e', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 15:45:52.790806+00', ''),
	('00000000-0000-0000-0000-000000000000', '51789d8f-92cb-4a64-b5bb-57351420869a', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 19:27:19.863849+00', ''),
	('00000000-0000-0000-0000-000000000000', '147f7d71-6321-408e-bc6b-d51270f55c9a', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 19:27:19.864486+00', ''),
	('00000000-0000-0000-0000-000000000000', '78bd0962-6254-4eea-9bff-3d0b8b5495cd', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 19:32:00.265227+00', ''),
	('00000000-0000-0000-0000-000000000000', '9a561465-c4a6-4c03-a986-5c8b8e455482', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 19:32:00.27277+00', ''),
	('00000000-0000-0000-0000-000000000000', '8ce2378b-c272-487e-b23d-7a21b08f6bba', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 20:25:35.90598+00', ''),
	('00000000-0000-0000-0000-000000000000', '659ea436-c075-40ad-88ff-0d1acf6aa949', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 20:25:35.907643+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b664cb0a-3eeb-431d-afe5-dfe11b9341bd', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 20:30:25.678825+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b152cc11-0a08-47bf-a6cb-8035d1e9778b', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 20:30:25.679545+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e2b6224-5f61-45a2-af8b-df59d043e8f7', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 21:29:36.608114+00', ''),
	('00000000-0000-0000-0000-000000000000', '69e56453-3554-4cc9-83d5-56efb7d9003e', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-10 21:29:36.609429+00', ''),
	('00000000-0000-0000-0000-000000000000', '93d199ec-a0d8-4e88-ab1a-b964037a3251', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-11 10:40:48.403364+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c901c590-55f7-45ea-86df-559c10630bf2', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 11:38:55.192256+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd0e6dcb5-b748-4445-870c-55ebd9057039', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 11:38:55.194595+00', ''),
	('00000000-0000-0000-0000-000000000000', '7c471dc0-c3da-4416-8f85-feb4f94a041e', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 12:42:11.118182+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c800d7fe-54e6-4a49-b9dd-4726d75ba508', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 12:42:11.119565+00', ''),
	('00000000-0000-0000-0000-000000000000', '76ecda43-9e04-4fcf-9f98-0b2be7883b00', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 14:12:00.609855+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b3af74ad-e1a7-4958-9fcf-9dffaf8cfd28', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 14:12:00.611757+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd8f7885e-6438-48c2-bf19-983b110043d7', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 15:38:19.284816+00', ''),
	('00000000-0000-0000-0000-000000000000', '0c7be3ee-d41e-4bc9-8c9b-1403bb3d3202', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 15:38:19.285492+00', ''),
	('00000000-0000-0000-0000-000000000000', '953519d6-8fa7-449f-baf3-dd6664cfe546', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 15:38:19.52146+00', ''),
	('00000000-0000-0000-0000-000000000000', '00a52ec7-72f0-4f8e-bc9d-a2d2e75491dc', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 15:38:19.522099+00', ''),
	('00000000-0000-0000-0000-000000000000', '8cef2c2b-e5aa-4bac-9013-c81ba4c1192e', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 15:38:20.264046+00', ''),
	('00000000-0000-0000-0000-000000000000', 'edc7fff5-789c-4e46-910d-8a16d03c05c7', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 15:38:20.264651+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f4511989-f07e-4e99-876d-a559216f9795', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 17:07:03.219782+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cc1e2026-dfb3-46d3-ad4d-ec6795c9d7fd', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 17:07:03.22184+00', ''),
	('00000000-0000-0000-0000-000000000000', '366f65cf-7e48-4a51-8203-91038c576310', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 19:41:48.192757+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dba2ed05-54fa-41e6-849e-679b58ec918c', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 19:41:48.194596+00', ''),
	('00000000-0000-0000-0000-000000000000', '8da4cd4e-469a-49cc-a4cd-4edb15079797', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 20:40:02.277586+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e32f3d8c-10cb-4b5b-a82e-ecc3cb846ded', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 20:40:02.279081+00', ''),
	('00000000-0000-0000-0000-000000000000', '15156108-01cb-4975-9841-a5d67f6eac74', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 21:09:46.235656+00', ''),
	('00000000-0000-0000-0000-000000000000', '607614de-a52c-4534-8ebd-311eaeaf297e', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 21:09:46.237068+00', ''),
	('00000000-0000-0000-0000-000000000000', '844717e4-6c40-4435-b882-458119baaa8f', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 21:38:02.563866+00', ''),
	('00000000-0000-0000-0000-000000000000', '393accdf-889c-4c85-8bf1-276e83f79b3d', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 21:38:02.565851+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bcb5f313-9535-4889-83c1-73b5c9d13591', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 22:36:15.965055+00', ''),
	('00000000-0000-0000-0000-000000000000', '14aa57c9-44d0-4987-93f7-a621b372b1fe', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-11 22:36:15.96709+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b666e173-a396-402e-95d9-b32b35f728bf', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-12 13:32:42.124704+00', ''),
	('00000000-0000-0000-0000-000000000000', '09769920-2d13-489c-92a4-04b47ba06310', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-12 14:30:50.450657+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd854983b-959f-43f8-99be-f347ae891915', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-12 14:30:50.451718+00', ''),
	('00000000-0000-0000-0000-000000000000', '68f6321c-a881-4172-b9a2-5675d1435d9e', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-12 15:29:35.795088+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a3c46e6a-851f-4801-be3d-d7d574673a99', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-12 15:29:35.796437+00', ''),
	('00000000-0000-0000-0000-000000000000', '9b09cfcf-bb2e-433e-8df5-9589c61f1803', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-12 19:38:44.615814+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b09aeadd-8099-4916-b99f-5b1d84794313', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-12 19:38:44.61723+00', ''),
	('00000000-0000-0000-0000-000000000000', '49448b3d-d450-43af-ad1d-c8c17995f29a', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-17 10:22:13.019633+00', ''),
	('00000000-0000-0000-0000-000000000000', '753a1b04-39b4-463d-bb64-afd46b44c90e', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-17 10:22:13.021591+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c1162167-87db-440e-ab5a-6a20b018581a', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-17 11:23:04.94145+00', ''),
	('00000000-0000-0000-0000-000000000000', '84dbf2e6-ca41-4127-ad63-55c17a0f5e5b', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-17 11:23:04.943928+00', ''),
	('00000000-0000-0000-0000-000000000000', '83120b54-5984-4c5d-bcb6-2cf5ddf03689', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-17 12:40:57.623626+00', ''),
	('00000000-0000-0000-0000-000000000000', '6143bb06-8d07-4a05-97e4-86d60dbd3be4', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-17 12:40:57.625162+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a4f87cc4-c807-45fc-a184-e0b812dd60fc', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-17 14:27:11.758008+00', ''),
	('00000000-0000-0000-0000-000000000000', '920265c5-b70a-4ef3-954e-c873091a943d', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-17 14:27:11.761599+00', ''),
	('00000000-0000-0000-0000-000000000000', '0a7c3859-5268-4cbe-81b7-d086ee8da4b1', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-17 15:28:55.862153+00', ''),
	('00000000-0000-0000-0000-000000000000', '663ca3c3-c214-4f42-ab6b-75873593b429', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-17 15:28:55.863573+00', ''),
	('00000000-0000-0000-0000-000000000000', '7f4586ae-14e3-4736-9ef1-f60eda7beaba', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 10:30:53.215309+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a834d2ab-531d-49af-8370-d38548d89cc1', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 10:30:53.217282+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b68faa90-ccaa-4ce6-8ea2-e7dff676f076', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 11:33:22.053462+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b279fbd4-19c3-49df-a4fb-89743537bb54', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 11:33:22.055888+00', ''),
	('00000000-0000-0000-0000-000000000000', '14ef88e9-7ac0-4263-bf76-87c02aeecee8', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 20:15:07.280429+00', ''),
	('00000000-0000-0000-0000-000000000000', '8fd0c546-a22c-46a5-8306-8016cf0eb57a', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 20:15:07.282068+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f88c6e5f-2c0a-4c85-aca9-eb0a549b6eba', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 21:13:34.563822+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e9dfa2b7-c8ee-470b-8b8a-3c8d5e65ee81', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 21:13:34.564543+00', ''),
	('00000000-0000-0000-0000-000000000000', '9fa45a90-59bb-4ef1-98c3-1a02a4b266f5', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 21:50:26.236805+00', ''),
	('00000000-0000-0000-0000-000000000000', '2a3d4087-119e-48df-934e-f6032ac2e1de', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 21:50:26.237527+00', ''),
	('00000000-0000-0000-0000-000000000000', '252bfca0-4b39-4e1a-8dd8-ab70519ffb5f', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 22:11:52.40676+00', ''),
	('00000000-0000-0000-0000-000000000000', '64ca2c50-8ba5-4b1a-aa29-012e24f643c0', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 22:11:52.407387+00', ''),
	('00000000-0000-0000-0000-000000000000', '355f7c23-a1be-4442-b0c3-9746e8411279', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 23:01:08.451271+00', ''),
	('00000000-0000-0000-0000-000000000000', '9c84f9cb-ae97-40e2-a9d9-ae65f3e43a6e', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 23:01:08.452473+00', ''),
	('00000000-0000-0000-0000-000000000000', '6a70c52c-c9d7-469e-b276-fd75c698ee00', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 23:10:37.601024+00', ''),
	('00000000-0000-0000-0000-000000000000', '4f62f4a5-b4f1-4499-a9db-5b304c28ab1d', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-18 23:10:37.601651+00', ''),
	('00000000-0000-0000-0000-000000000000', '63a9b662-5f96-4623-a4a5-684c9482fea1', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 10:55:01.024892+00', ''),
	('00000000-0000-0000-0000-000000000000', '5acfd103-5586-4008-9ada-3660c75dded6', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 10:55:01.027507+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a2997cd3-59d9-4d7b-91fe-41940ff6a9eb', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 12:05:44.116418+00', ''),
	('00000000-0000-0000-0000-000000000000', '22fc6c15-3e91-401f-b694-5a0deb1513c4', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 12:05:44.118584+00', ''),
	('00000000-0000-0000-0000-000000000000', '389050dc-23a8-4de1-9dc0-2048303e5008', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 13:21:25.570549+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e13e4719-af22-40a5-9209-2904145b9285', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 13:21:25.571169+00', ''),
	('00000000-0000-0000-0000-000000000000', 'faa965bd-f9ca-4ff0-9cbc-b6972319e8fa', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:17:34.441675+00', ''),
	('00000000-0000-0000-0000-000000000000', '237cd46b-f99a-46f3-9162-32ef1401fdb4', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:17:34.444122+00', ''),
	('00000000-0000-0000-0000-000000000000', 'de35b1b8-42b8-4c70-804f-b61d0d7cf600', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:17:34.469481+00', ''),
	('00000000-0000-0000-0000-000000000000', '87dd9aba-3896-40cc-8dd3-3e719f8a377c', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:17:34.470147+00', ''),
	('00000000-0000-0000-0000-000000000000', '0f9bf5bf-3c59-40c2-8e26-5fd93e298394', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:17:34.502803+00', ''),
	('00000000-0000-0000-0000-000000000000', '0de5821f-deda-4982-ab4e-69793d32cb2a', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:17:34.503508+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fbaed774-8911-4350-9d1f-885f41aed0d2', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:17:35.163361+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aa8351bc-ae3b-4aae-89e1-f9a21e587885', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:17:35.164156+00', ''),
	('00000000-0000-0000-0000-000000000000', '993f62a7-d3e9-4592-b439-46f9f6ee5b27', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:17:35.473722+00', ''),
	('00000000-0000-0000-0000-000000000000', '537c4f23-e810-475b-879d-648501ef97fb', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:17:35.474606+00', ''),
	('00000000-0000-0000-0000-000000000000', '601325cb-7271-40db-8949-a5dd705c8aea', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:33:52.639928+00', ''),
	('00000000-0000-0000-0000-000000000000', '0eabfd1b-ae59-4228-9312-7eecd1d581db', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 14:33:52.6417+00', ''),
	('00000000-0000-0000-0000-000000000000', '3f44c8ce-292c-43f3-9845-853284ec7cfc', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 16:52:44.976085+00', ''),
	('00000000-0000-0000-0000-000000000000', '1715c833-f0c2-48d2-9075-3afad624c134', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 16:52:44.978833+00', ''),
	('00000000-0000-0000-0000-000000000000', '1a89af24-7acf-45d2-a1c1-446d7295cf8c', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 18:02:23.052846+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b6955ffa-e4da-493a-b011-329ed67ad975', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 18:02:23.055157+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cca557a8-020f-458c-a937-23ceebc3faee', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 18:02:23.069827+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ac3c19fb-a1cf-4686-ac70-9f5dea6875de', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 18:02:23.070453+00', ''),
	('00000000-0000-0000-0000-000000000000', '561cd2f7-9e6b-47b9-a772-576e9e87072b', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 18:02:23.113579+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f6ec6a79-57ac-4783-8c04-71fd83981cf8', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 18:02:23.114182+00', ''),
	('00000000-0000-0000-0000-000000000000', '61c22482-e38c-4976-baa2-03575f55a902', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 19:03:01.703155+00', ''),
	('00000000-0000-0000-0000-000000000000', '2412e4c0-dcbd-48f8-97b6-11287a86b464', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-19 19:03:01.704857+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b57676e4-ac42-4714-81b0-d44c942d2d78', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-20 10:31:52.338362+00', ''),
	('00000000-0000-0000-0000-000000000000', '4aca996a-e65f-4d2a-a349-17dd8410779a', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-20 10:31:52.341034+00', ''),
	('00000000-0000-0000-0000-000000000000', '0e37ff01-3f90-4512-b650-9ec2ea95a011', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-20 13:26:14.781193+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e01da1c2-383d-480a-862e-e059f753bac3', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-20 13:26:14.781843+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b053438d-ef8b-4d34-a88e-fc81ddfd45f2', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-20 17:48:44.154324+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f4994dc1-61a2-405c-9f5a-691a69b39d2e', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-20 17:48:44.155893+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e173b4ef-55c9-492c-bb71-71749ba29b04', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-20 19:28:22.201585+00', ''),
	('00000000-0000-0000-0000-000000000000', '94c42571-8492-44bc-9ff5-83d3cfa6bebe', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-20 19:28:22.203915+00', ''),
	('00000000-0000-0000-0000-000000000000', '80788c94-122b-47f7-9ca5-fc0c8b5b58a3', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-20 20:41:51.949455+00', ''),
	('00000000-0000-0000-0000-000000000000', '711c413c-3954-445a-b852-e5843c32a0a8', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-20 21:41:55.378412+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c0aaccc6-2933-4240-ae41-0a8fba9604bb', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-20 21:41:55.380484+00', ''),
	('00000000-0000-0000-0000-000000000000', '2ef302be-7c16-4e39-903c-bb0392c7c4bb', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-23 14:16:48.173577+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bd856620-f5d1-497a-a801-9bee1fb94f78', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-23 19:24:15.059646+00', ''),
	('00000000-0000-0000-0000-000000000000', '31968043-51a0-4d96-9a03-917c99681398', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-23 19:24:15.065053+00', ''),
	('00000000-0000-0000-0000-000000000000', '52dbb7e5-4ea7-4e41-82fc-b9c0adb848f7', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-23 20:25:36.078951+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e9032a7e-c8ed-4d4a-a16e-0848cbf31e67', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-23 20:25:36.083394+00', ''),
	('00000000-0000-0000-0000-000000000000', '165ff90d-b802-47ae-8951-b9b4f6faa2bb', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 10:27:57.251423+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cc62ca56-8672-43ec-9f81-4d36f4a18c7c', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 10:27:57.25481+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a81f6b1a-8771-4b92-ae13-4d436d555578', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 10:27:59.692406+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f2e8d3fe-e967-4bfd-b189-e6eb5032d2b1', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 10:27:59.693048+00', ''),
	('00000000-0000-0000-0000-000000000000', '7f85b355-2825-4678-b882-1fcbbbf9d8ef', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 11:37:11.252943+00', ''),
	('00000000-0000-0000-0000-000000000000', '0c00ff2b-666d-4af5-ab94-e61e055070ab', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 11:37:11.254151+00', ''),
	('00000000-0000-0000-0000-000000000000', '875b69b9-a797-43b4-b54f-3b9534295cc7', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 15:04:07.505022+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c69d5758-4452-4c38-a426-a651b52872d2', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 15:04:07.50628+00', ''),
	('00000000-0000-0000-0000-000000000000', '6eae9bdb-c69a-4767-a506-54351a241b54', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 20:01:55.261226+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c59349e7-a33b-4ae7-9651-fd4a9c33b27a', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 20:01:55.263595+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f12ae4a2-399c-44d8-a22f-22c429d728bc', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 20:03:54.580986+00', ''),
	('00000000-0000-0000-0000-000000000000', '45f9761a-d81a-48ab-8a75-ffd7a14ec5f1', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 20:03:54.583575+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b6149ae2-f309-45d4-b357-268d709faf52', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 21:02:00.700741+00', ''),
	('00000000-0000-0000-0000-000000000000', '213943b3-acff-4970-8812-1e2f9d4982a6', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 21:02:00.702393+00', ''),
	('00000000-0000-0000-0000-000000000000', '9f42b55c-47f4-4f5e-9f21-737e93558baa', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 21:21:36.674598+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cf779fab-92cb-45bc-b938-4b0764adced2', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 21:21:36.67604+00', ''),
	('00000000-0000-0000-0000-000000000000', '65f4bae1-cd0b-4e39-9b54-0ea079b839fe', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 22:02:12.773767+00', ''),
	('00000000-0000-0000-0000-000000000000', '2568c7a0-fb04-46ca-bc42-85bfae54b958', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 22:02:12.775091+00', ''),
	('00000000-0000-0000-0000-000000000000', '4398a75b-c7ca-4e23-84e5-1af55e9b16eb', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 22:19:39.524156+00', ''),
	('00000000-0000-0000-0000-000000000000', '29051a69-317d-4128-a183-3e09f2ebc085', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 22:19:39.526228+00', ''),
	('00000000-0000-0000-0000-000000000000', '1aea2a5c-9790-43b7-bd07-b5290e72e5ad', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 23:00:19.721657+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c5cee704-b17c-471b-b584-6a8c4864ce4f', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 23:00:19.723654+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd73da1f9-7d27-4b86-9b30-4f765eef1618', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 23:48:28.773697+00', ''),
	('00000000-0000-0000-0000-000000000000', '58b38ae8-e362-490b-9255-6621320126a6', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-24 23:48:28.775413+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cb0a6290-0ba1-4c99-8a4a-10a53bf4a27c', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 10:28:19.872578+00', ''),
	('00000000-0000-0000-0000-000000000000', '192628b0-8345-4a65-ae75-338cbd768dc5', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 10:28:19.874469+00', ''),
	('00000000-0000-0000-0000-000000000000', '6c008654-f88d-447e-92c3-35c105c5c101', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 10:28:26.256283+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c727bda2-3442-49e6-9160-5a390050490f', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 10:28:26.256895+00', ''),
	('00000000-0000-0000-0000-000000000000', 'caf64d67-f212-4a24-9854-fcbd6ab2f711', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 11:37:09.356089+00', ''),
	('00000000-0000-0000-0000-000000000000', '7e3c4951-8cbf-4045-afb4-169d9f23d2fd', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 11:37:09.357906+00', ''),
	('00000000-0000-0000-0000-000000000000', '9133b6e8-1cb1-4b0b-a025-bd1d063890f3', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 12:38:27.181069+00', ''),
	('00000000-0000-0000-0000-000000000000', '5d53fd72-4871-4178-aca7-5c450a63a0c7', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 12:38:27.184226+00', ''),
	('00000000-0000-0000-0000-000000000000', '2fb0b3b8-e8da-4c39-93d2-400d287021fd', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 12:38:29.57929+00', ''),
	('00000000-0000-0000-0000-000000000000', '8b86aee6-7c10-467d-84ea-9ab0cfa9abe4', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 12:38:29.579908+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b9374bb5-4ba8-4821-a4ea-dc3c68a0edba', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 14:07:02.68142+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f75d6919-efbd-41ff-919f-edb5dbebd5e8', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 14:07:02.685215+00', ''),
	('00000000-0000-0000-0000-000000000000', '7e018ae3-790b-4f4f-a2cc-bb3f2310b770', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 15:05:17.984448+00', ''),
	('00000000-0000-0000-0000-000000000000', '181ac7bc-0b70-46a2-b6ba-808de4066e2b', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-25 15:05:17.989391+00', ''),
	('00000000-0000-0000-0000-000000000000', '473e2f54-6187-4b38-a098-c0ffbdc27bd6', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-26 10:34:22.447069+00', ''),
	('00000000-0000-0000-0000-000000000000', '676e6113-77a8-42c2-bcd6-86a2e93e0589', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-26 10:34:22.448997+00', ''),
	('00000000-0000-0000-0000-000000000000', '90123727-5c54-455b-b5d5-fda40872c096', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-26 11:33:50.994757+00', ''),
	('00000000-0000-0000-0000-000000000000', '7d24a397-8e88-453b-983b-0eecf2083ea1', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-26 11:33:50.998376+00', ''),
	('00000000-0000-0000-0000-000000000000', '6f3d70b3-6de2-4a58-9c20-6ef9945447e9', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-26 12:40:40.10182+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b346152d-d85c-4486-8906-92cf7de0734d', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-26 12:40:40.106091+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e05001ec-7f5c-41b4-acc4-0856bbf9e8a2', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-26 13:52:36.241604+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e1aead07-5fe8-47f4-b368-d7bb883de117', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-26 13:52:36.244653+00', ''),
	('00000000-0000-0000-0000-000000000000', '77ecce56-497f-473b-bc44-410cd687489b', '{"action":"logout","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account"}', '2023-10-26 13:54:17.58942+00', ''),
	('00000000-0000-0000-0000-000000000000', '536e1bbc-5ea9-4292-b764-b3023efb53fa', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-27 10:19:00.363829+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e2dff929-4c42-4473-8d6b-58f1985fc336', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-27 11:17:00.884544+00', ''),
	('00000000-0000-0000-0000-000000000000', '113f03be-d169-47aa-9eed-c1352b2e692e', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-27 11:17:00.888339+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e868bee7-8c57-4bc9-bdad-3ce244bd1aec', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-27 12:15:01.802166+00', ''),
	('00000000-0000-0000-0000-000000000000', 'abba883c-dfcf-453f-8de2-256f3a6ce78a', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-27 12:15:01.805884+00', ''),
	('00000000-0000-0000-0000-000000000000', '7012afe3-5011-415d-b58d-f8991579f5a0', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-27 13:13:28.787845+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd65e3dfb-38f2-48da-b66f-2980b50f50fc', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-27 13:13:28.790657+00', ''),
	('00000000-0000-0000-0000-000000000000', '58a2b537-7f21-488d-ad1d-9d162f845b07', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-27 14:12:32.128236+00', ''),
	('00000000-0000-0000-0000-000000000000', '44cc3a69-8198-4c11-9b08-126faab60a20', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-27 14:12:32.132021+00', ''),
	('00000000-0000-0000-0000-000000000000', 'efc7a19d-6529-4451-aed7-12e5a57097f2', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-27 15:13:25.844235+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ce2afa76-8155-4aad-b6a8-878818631927', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-27 15:13:25.848535+00', ''),
	('00000000-0000-0000-0000-000000000000', '418a926d-8cac-4229-ad3b-fa789c74b227', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-27 15:55:20.569815+00', ''),
	('00000000-0000-0000-0000-000000000000', '517ee714-edc8-446b-b591-e74ed065d565', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-27 22:49:25.83202+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e0ece81-1721-4043-9d64-851a3c69a9ca', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 11:27:37.986657+00', ''),
	('00000000-0000-0000-0000-000000000000', '70f16f83-c016-4cc6-9a67-6b2443968499', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 11:27:37.990757+00', ''),
	('00000000-0000-0000-0000-000000000000', '44afce8c-7750-4358-b356-77cde40de2eb', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 12:38:35.186802+00', ''),
	('00000000-0000-0000-0000-000000000000', '2784292e-53da-4b95-a364-6f15890c2995', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 12:38:35.188423+00', ''),
	('00000000-0000-0000-0000-000000000000', '91dbf34e-2e4c-4826-87f6-1614286cf733', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 13:36:56.19045+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a32fc71f-650f-446a-b39b-00c5d820ac4c', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 13:36:56.193785+00', ''),
	('00000000-0000-0000-0000-000000000000', '9eab41c5-844a-4536-beaa-39627adb106c', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 14:35:26.209744+00', ''),
	('00000000-0000-0000-0000-000000000000', '5f48a1da-fc19-4972-adff-1461ed5ac6e8', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 14:35:26.212925+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f567f986-d07d-4861-9947-1bbcf9d58906', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 15:33:56.26692+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f09c714c-f404-4063-84c4-911d16cfd4ec', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 15:33:56.268293+00', ''),
	('00000000-0000-0000-0000-000000000000', '7fd0bdd4-8be4-4d6b-9657-950b44ab835d', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-10-30 21:16:16.47142+00', ''),
	('00000000-0000-0000-0000-000000000000', 'da1882c8-d031-4228-9832-065936740e9d', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 22:14:30.434863+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e4945b4-7a28-42f8-9cb0-3ec9cf348e36', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 22:14:30.438098+00', ''),
	('00000000-0000-0000-0000-000000000000', '9ea3634a-798c-464d-a3f4-f3e1fc2df7d0', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 23:17:19.71045+00', ''),
	('00000000-0000-0000-0000-000000000000', '12414679-a538-44fc-aa8d-6588b9b7d142', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-10-30 23:17:19.714182+00', ''),
	('00000000-0000-0000-0000-000000000000', '2b5e39c0-24e5-4498-b453-f06ea3d1a0c5', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-11-06 12:13:40.200387+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c5ceb4b0-ac1c-41ba-b4e1-e983d77c4b70', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-11-06 20:04:27.020435+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a81c92bf-59c7-430d-ad3e-1f27b854d909', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-11-06 20:04:27.022745+00', ''),
	('00000000-0000-0000-0000-000000000000', '41733117-1fc5-43c0-8301-e467125ff075', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-11-08 13:42:57.514719+00', ''),
	('00000000-0000-0000-0000-000000000000', '859f9261-1202-4b13-a075-b704538a9f58', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-11-12 22:42:36.600138+00', ''),
	('00000000-0000-0000-0000-000000000000', '01177560-2900-4a1e-8172-3ffc309fff26', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-11-13 13:00:31.586511+00', ''),
	('00000000-0000-0000-0000-000000000000', '9acfdaf7-8d0d-41ba-bed3-fd27fa5ae4ed', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-11-13 13:58:40.369577+00', ''),
	('00000000-0000-0000-0000-000000000000', '8f14e3e9-5c5a-4343-8b47-c53d26434b63', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-11-13 13:58:40.371375+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ef004e59-5ae3-4ec6-949b-0b3e47597683', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-11-13 17:39:21.637893+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e939af3e-6464-4b7e-9c68-4b0690bfbe02', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-11-13 17:39:21.646712+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e63b751c-2c5c-48a1-bc6a-58bc47c85129', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-11-13 20:37:21.416046+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c6803a41-3b4e-4175-9d87-c5014f63d5c5', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-11-13 20:37:21.418098+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cb0f8149-4e2b-4cb7-b55d-e4eac1ccdf95', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-05 19:31:52.642505+00', ''),
	('00000000-0000-0000-0000-000000000000', '41aaa1b6-3aba-4bef-bd0d-a50fc1273133', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-05 21:17:44.894017+00', ''),
	('00000000-0000-0000-0000-000000000000', '4884b7ab-3f2e-414c-8724-de29cd649073', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-05 21:17:44.894582+00', ''),
	('00000000-0000-0000-0000-000000000000', '58797ad8-d7fc-4d5f-abbb-fd29c5943756', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-05 22:16:03.703186+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cfca4b40-c9c1-4433-ae88-47831381a124', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-05 22:16:03.703871+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dcfc65c9-3a5b-4972-9de4-037df6799710', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-06 12:55:21.40246+00', ''),
	('00000000-0000-0000-0000-000000000000', '356a6aa3-7b2f-44ec-a3f0-d0c909649001', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-06 14:30:37.182841+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dfe63f65-5fef-4edd-abfb-42c4c6167a41', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-06 14:30:37.184335+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c15d5211-be9b-43b7-8f13-63e04a395e8a', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-06 15:31:29.447583+00', ''),
	('00000000-0000-0000-0000-000000000000', '466bc976-46ce-467c-9e13-1e1cd8df7943', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-06 15:31:29.448245+00', ''),
	('00000000-0000-0000-0000-000000000000', '967f65f6-2501-4147-9d05-1f9ec7eb781d', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-06 19:52:45.364261+00', ''),
	('00000000-0000-0000-0000-000000000000', '5db27eb7-b0d2-496c-8550-54979ae545b9', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-06 19:52:45.365925+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a0e77da7-85e2-4b70-9290-e3cf730908fc', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-06 20:51:40.035848+00', ''),
	('00000000-0000-0000-0000-000000000000', '141cae59-28ef-417d-8e42-b954082c316d', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-06 20:51:40.036853+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e313fc3a-f0e4-48ca-82aa-a5403f9d9ca4', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-07 12:40:28.365552+00', ''),
	('00000000-0000-0000-0000-000000000000', '1ab01d7e-9d56-4dbd-a440-7b9eea7a396c', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-07 17:20:59.900497+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fc6a7de5-dea0-4c28-9dd9-54caa2523dba', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-07 17:20:59.901156+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a21d183b-a519-4b54-b6f0-88ba8272e0ba', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-12 12:55:21.189511+00', ''),
	('00000000-0000-0000-0000-000000000000', '6ab4a4f4-e650-4451-bbfc-2437c3198bb9', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-12 14:02:06.852629+00', ''),
	('00000000-0000-0000-0000-000000000000', '335dde9c-7c86-4142-8fb6-5fa655391d88', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-12 14:02:06.854074+00', ''),
	('00000000-0000-0000-0000-000000000000', '4f4a91cd-fee3-4c50-a05f-1f31089027a6', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-12 15:36:06.91973+00', ''),
	('00000000-0000-0000-0000-000000000000', '0d6b0900-344b-4123-b9a2-ebff217e4f06', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-12 15:36:06.920472+00', ''),
	('00000000-0000-0000-0000-000000000000', '9345ac70-fd4f-4e89-a2c3-6faa4c673357', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-12 22:04:19.367866+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f5903684-b037-47cd-b175-0f8a3db5ce5e', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-12 22:04:19.368546+00', ''),
	('00000000-0000-0000-0000-000000000000', '5a79f709-6390-4c36-a9b1-b8141fd27d2f', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-13 18:42:57.096618+00', ''),
	('00000000-0000-0000-0000-000000000000', '67b7809b-e1a2-4307-b597-043d023a5c92', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-13 20:21:53.743422+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b6e6ce0a-5578-48df-ad68-eaaa138e1574', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-13 20:21:53.744945+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd15b5dde-90cf-4989-af51-385da3ea89f7', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-13 21:50:09.068498+00', ''),
	('00000000-0000-0000-0000-000000000000', '727e6926-ad46-430d-9f5d-32ab1e44ef8f', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-13 23:13:37.725254+00', ''),
	('00000000-0000-0000-0000-000000000000', '8c112202-b3fa-4ba9-8b64-87f16eecdeb2', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-13 23:13:37.725869+00', ''),
	('00000000-0000-0000-0000-000000000000', '95ac9ab7-450e-47f4-8a79-ccee7a6af2ef', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-14 22:08:39.547307+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a832c236-f2e1-427d-b36e-5c902235ed3a', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-14 22:08:39.547897+00', ''),
	('00000000-0000-0000-0000-000000000000', '9bf58061-b908-48ab-85ab-7a7520e561a3', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-14 23:13:03.363923+00', ''),
	('00000000-0000-0000-0000-000000000000', '5cabd175-612a-48be-8ece-0df91794072f', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-14 23:13:03.364686+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd4661c9e-e735-4643-8e12-e9395e048493', '{"action":"logout","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account"}', '2023-12-14 23:47:51.213904+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cce4963e-7215-4dca-8a0e-dd0115cf7972', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-14 23:47:56.82845+00', ''),
	('00000000-0000-0000-0000-000000000000', '83dd5a17-6c8d-4fb2-9b8c-93ba4d46877a', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-19 15:32:46.206179+00', ''),
	('00000000-0000-0000-0000-000000000000', '94ed0855-3981-4870-9d8f-b4f6f3ea02c9', '{"action":"logout","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account"}', '2023-12-19 15:33:03.319693+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e7dd0329-0d18-436f-9ae0-9a947d6cd62d', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-19 16:42:55.822774+00', ''),
	('00000000-0000-0000-0000-000000000000', '8525a423-97fd-4f5c-a659-e7499674bee6', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-20 15:14:22.896586+00', ''),
	('00000000-0000-0000-0000-000000000000', '53a57235-826b-40e1-a76c-8b6807e28c1b', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-20 16:14:20.023319+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e33b0d16-ebda-441a-a7e5-e5197e6d7489', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-20 16:14:20.026308+00', ''),
	('00000000-0000-0000-0000-000000000000', '3ff742ac-b8f1-4b66-b8d9-4dce5c1c3275', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-20 20:08:31.146988+00', ''),
	('00000000-0000-0000-0000-000000000000', '97e84bf6-ba4b-4427-b23a-a69214f35378', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-21 14:44:46.933057+00', ''),
	('00000000-0000-0000-0000-000000000000', '69818f77-0d08-431c-abe7-91b9e589f5e2', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-21 14:44:46.934376+00', ''),
	('00000000-0000-0000-0000-000000000000', '4b3ead23-42b2-4692-9c02-ef6cc74f8d69', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-27 12:15:29.287076+00', ''),
	('00000000-0000-0000-0000-000000000000', '9faeb220-a228-41a5-9d91-6cae9dd1fb87', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-27 12:15:29.291539+00', ''),
	('00000000-0000-0000-0000-000000000000', '9650a24b-8ac0-4035-82b0-dfd36d0ac20f', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-27 13:15:54.433521+00', ''),
	('00000000-0000-0000-0000-000000000000', '190b8314-a8b8-4671-ad40-7700d03f5065', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-27 13:15:54.435213+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c5849a21-665a-4bb2-bba3-348fcdc7b223', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-27 14:15:57.140729+00', ''),
	('00000000-0000-0000-0000-000000000000', '9d87ef77-bcca-449b-af69-be4ab317c654', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-27 14:15:57.143023+00', ''),
	('00000000-0000-0000-0000-000000000000', '3f804864-3dcf-4787-adcd-a58bdffd2e85', '{"action":"login","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2023-12-28 15:05:15.908077+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bddcc81e-588a-4874-bf9a-6f12e47ceea9', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-28 16:14:26.508008+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e4b35dcb-7e51-4242-93c0-d04567eb826a', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-28 16:14:26.509958+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f8d7ff5d-0a4d-40f0-a8d8-e8b7a478d01c', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-28 17:35:02.89476+00', ''),
	('00000000-0000-0000-0000-000000000000', '790a2901-e021-41b0-92a8-628d05b28747', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-28 17:35:02.896247+00', ''),
	('00000000-0000-0000-0000-000000000000', '928bae2c-f016-4320-8ce5-e648f076e7d0', '{"action":"token_refreshed","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-28 18:34:24.200861+00', ''),
	('00000000-0000-0000-0000-000000000000', '397ae599-a50d-42bd-a671-1109cef7a488', '{"action":"token_revoked","actor_id":"6f73665c-2d24-4689-ad43-8e72766396a7","actor_username":"admin@admin.com","actor_via_sso":false,"log_type":"token"}', '2023-12-28 18:34:24.202317+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', '6f73665c-2d24-4689-ad43-8e72766396a7', 'authenticated', 'authenticated', 'admin@admin.com', '$2a$10$8nF8iFDlCnansMYwLOn4WuNsKdiasAUmidIzpjFtSW4XNF/YTpKDS', '2023-09-26 20:41:45.895268+00', NULL, '', NULL, '', NULL, '', '', NULL, '2023-12-28 15:05:15.910726+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2023-09-26 20:41:45.860001+00', '2023-12-28 18:34:24.206489+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('6f73665c-2d24-4689-ad43-8e72766396a7', '6f73665c-2d24-4689-ad43-8e72766396a7', '{"sub": "6f73665c-2d24-4689-ad43-8e72766396a7", "email": "admin@admin.com"}', 'email', '2023-09-26 20:41:45.886128+00', '2023-09-26 20:41:45.886176+00', '2023-09-26 20:41:45.886176+00', 'e676df36-00b6-418a-b14a-ec138716c54b');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('5cab3a49-a482-4b52-97a9-17d275c6a9fd', '6f73665c-2d24-4689-ad43-8e72766396a7', '2023-12-28 15:05:15.91081+00', '2023-12-28 18:34:24.20827+00', NULL, 'aal1', NULL, '2023-12-28 18:34:24.208193', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '190.183.193.28', NULL),
	('0ea14d08-e478-4ca9-9828-3f58a153c5ad', '6f73665c-2d24-4689-ad43-8e72766396a7', '2023-12-19 16:42:55.823972+00', '2023-12-19 16:42:55.823972+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '190.183.193.28', NULL),
	('c43f7292-7dd9-4dc1-a1cf-273f016c356f', '6f73665c-2d24-4689-ad43-8e72766396a7', '2023-12-20 20:08:31.149196+00', '2023-12-20 20:08:31.149196+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '190.183.193.28', NULL),
	('19ce4c58-6339-4d21-ba59-2b72eef9a8f4', '6f73665c-2d24-4689-ad43-8e72766396a7', '2023-12-20 15:14:22.899629+00', '2023-12-27 14:15:57.147255+00', NULL, 'aal1', NULL, '2023-12-27 14:15:57.147176', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '152.168.142.212', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('0ea14d08-e478-4ca9-9828-3f58a153c5ad', '2023-12-19 16:42:55.826626+00', '2023-12-19 16:42:55.826626+00', 'password', '8009dc7a-e556-48f0-86e4-a540ec561572'),
	('19ce4c58-6339-4d21-ba59-2b72eef9a8f4', '2023-12-20 15:14:22.902686+00', '2023-12-20 15:14:22.902686+00', 'password', '7db64ac5-12ec-4227-8c55-133e43ee9928'),
	('c43f7292-7dd9-4dc1-a1cf-273f016c356f', '2023-12-20 20:08:31.156797+00', '2023-12-20 20:08:31.156797+00', 'password', '5486ef92-4227-4b7e-ad75-45180c3feb58'),
	('5cab3a49-a482-4b52-97a9-17d275c6a9fd', '2023-12-28 15:05:15.915592+00', '2023-12-28 15:05:15.915592+00', 'password', '5f6a27bc-e4ac-4ba7-be61-f225f29393bd');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 192, 'gV1BdaB47Cn_0PfER-rFzQ', '6f73665c-2d24-4689-ad43-8e72766396a7', false, '2023-12-19 16:42:55.825118+00', '2023-12-19 16:42:55.825118+00', NULL, '0ea14d08-e478-4ca9-9828-3f58a153c5ad'),
	('00000000-0000-0000-0000-000000000000', 193, 'PHHF1X4NXObvu9coL7-BDQ', '6f73665c-2d24-4689-ad43-8e72766396a7', true, '2023-12-20 15:14:22.901433+00', '2023-12-20 16:14:20.027204+00', NULL, '19ce4c58-6339-4d21-ba59-2b72eef9a8f4'),
	('00000000-0000-0000-0000-000000000000', 195, 'mjgNWzvIxSMwy6MeVYTZ3A', '6f73665c-2d24-4689-ad43-8e72766396a7', false, '2023-12-20 20:08:31.154314+00', '2023-12-20 20:08:31.154314+00', NULL, 'c43f7292-7dd9-4dc1-a1cf-273f016c356f'),
	('00000000-0000-0000-0000-000000000000', 194, 'EUbNBUJXy6csW0Wi8vwQVQ', '6f73665c-2d24-4689-ad43-8e72766396a7', true, '2023-12-20 16:14:20.029853+00', '2023-12-21 14:44:46.935014+00', 'PHHF1X4NXObvu9coL7-BDQ', '19ce4c58-6339-4d21-ba59-2b72eef9a8f4'),
	('00000000-0000-0000-0000-000000000000', 196, 'xA9Q9R5hzo_0E9gdB1A9Vw', '6f73665c-2d24-4689-ad43-8e72766396a7', true, '2023-12-21 14:44:46.935662+00', '2023-12-27 12:15:29.29303+00', 'EUbNBUJXy6csW0Wi8vwQVQ', '19ce4c58-6339-4d21-ba59-2b72eef9a8f4'),
	('00000000-0000-0000-0000-000000000000', 197, 'TqATUmIyohYZX8IFkVdVMA', '6f73665c-2d24-4689-ad43-8e72766396a7', true, '2023-12-27 12:15:29.296632+00', '2023-12-27 13:15:54.436549+00', 'xA9Q9R5hzo_0E9gdB1A9Vw', '19ce4c58-6339-4d21-ba59-2b72eef9a8f4'),
	('00000000-0000-0000-0000-000000000000', 198, 'fgVf3-sh8Vx4uESx8aacJA', '6f73665c-2d24-4689-ad43-8e72766396a7', true, '2023-12-27 13:15:54.436895+00', '2023-12-27 14:15:57.143613+00', 'TqATUmIyohYZX8IFkVdVMA', '19ce4c58-6339-4d21-ba59-2b72eef9a8f4'),
	('00000000-0000-0000-0000-000000000000', 199, '0SZSSwgRtic1rWmvTY3hbg', '6f73665c-2d24-4689-ad43-8e72766396a7', false, '2023-12-27 14:15:57.144692+00', '2023-12-27 14:15:57.144692+00', 'fgVf3-sh8Vx4uESx8aacJA', '19ce4c58-6339-4d21-ba59-2b72eef9a8f4'),
	('00000000-0000-0000-0000-000000000000', 200, 'thWjhQpuuoJy0h47SWUauA', '6f73665c-2d24-4689-ad43-8e72766396a7', true, '2023-12-28 15:05:15.914239+00', '2023-12-28 16:14:26.51104+00', NULL, '5cab3a49-a482-4b52-97a9-17d275c6a9fd'),
	('00000000-0000-0000-0000-000000000000', 201, 'klH8ikcb0tQziabVaTLTgw', '6f73665c-2d24-4689-ad43-8e72766396a7', true, '2023-12-28 16:14:26.512124+00', '2023-12-28 17:35:02.897243+00', 'thWjhQpuuoJy0h47SWUauA', '5cab3a49-a482-4b52-97a9-17d275c6a9fd'),
	('00000000-0000-0000-0000-000000000000', 202, 'PGbpPNs_sUl46p8vOx07sQ', '6f73665c-2d24-4689-ad43-8e72766396a7', true, '2023-12-28 17:35:02.897626+00', '2023-12-28 18:34:24.205117+00', 'klH8ikcb0tQziabVaTLTgw', '5cab3a49-a482-4b52-97a9-17d275c6a9fd'),
	('00000000-0000-0000-0000-000000000000', 203, 'qz4DJ3nU33nrVcNkqG9UAg', '6f73665c-2d24-4689-ad43-8e72766396a7', false, '2023-12-28 18:34:24.205567+00', '2023-12-28 18:34:24.205567+00', 'PGbpPNs_sUl46p8vOx07sQ', '5cab3a49-a482-4b52-97a9-17d275c6a9fd');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: players; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."players" ("id", "dni", "name", "lastname", "birthdate", "cellphone", "email", "observations", "created_at", "active") VALUES
	('c5bd9401-e8e5-446b-bd34-82f3b050dea4', '3', 'Adriano', 'catena', '1992-05-13', '', '', NULL, '2023-10-09 15:10:42.540721+00', true),
	('923e6de0-9d27-499e-bb99-fe9fc9925d7b', '4', 'Adriano', 'Catena', '1992-05-13', '', '', NULL, '2023-10-09 15:11:46.500426+00', true),
	('f7c6844e-6c6f-4f08-93d7-af28f8862189', '5', 'pepe', '2', '1992-05-13', '', '', NULL, '2023-10-09 15:14:03.834574+00', true),
	('bec2992c-76a4-43bf-b33f-9d4aa8d9fbdc', '6', 'luis', 'luis', '1992-05-13', '', '', NULL, '2023-10-09 15:19:55.368267+00', true),
	('ac96992c-dff7-4be1-a57c-25a98a24b6c1', '13', 'pepe', 'more', '1992-05-13', '', '', NULL, '2023-10-09 15:21:56.810515+00', true),
	('2febeeb1-b4a5-493d-94ec-f672c6642edf', '3691015', 'test', 'test', '1992-05-13', '', '', NULL, '2023-10-09 15:24:05.38261+00', true),
	('e71406d2-46e5-4b6e-ab80-432cf3bc03a4', '8', 'test', 'test', '1992-05-13', '', '', NULL, '2023-10-09 15:27:29.734859+00', true),
	('271de5e8-d117-402e-9917-ee0a402a4d88', '10', 'weqwe', 'qewqwe', '0141-03-12', '', '', NULL, '2023-10-09 15:28:09.484994+00', true),
	('6a681fa9-75eb-4b0a-92db-a56d1fb685b2', '144', 'awgw', 'adaga', '4514-04-11', '', '', NULL, '2023-10-09 15:28:34.453462+00', true),
	('4f84fccd-eca7-47d9-8b0d-436b6e4cb0a7', '36910145', 'asfdas', 'asfasf', '0144-12-14', '13', '', NULL, '2023-10-09 15:33:15.384907+00', true),
	('ccc988c1-8b16-4825-99a7-6a043cc9897b', '13883624', 'asdadf', 'afafs', '0014-12-13', '34343434151', '', NULL, '2023-10-09 15:34:23.409632+00', true),
	('42de1e4b-5bb5-45e0-8179-35298b736f8f', '245252525', 'asfasf', 'afafsa', '0052-12-13', '', '', NULL, '2023-10-09 15:34:59.247669+00', true),
	('d74f295b-8af2-451c-b983-79fada7ea70e', '362352352525', 'asdasd', 'asdasd', '0014-12-13', '', '', NULL, '2023-10-10 20:06:56.801428+00', true),
	('445cc7e0-a636-406f-922f-d6588fcc0979', '39541243', 'augusto', 'rodriguez', '1999-11-25', '3434567890', 'agus@gmail.com', '', '2023-09-26 21:09:50.055974+00', true),
	('01f54beb-1c68-4dd3-8e2e-defa3b711333', '36099611', 'Mauricio MArtin', 'Fontana Gaggion', '1991-10-26', '3434152345', 'algo@asinomas.com', '', '2023-10-10 13:21:24.824363+00', true),
	('069d71d2-6211-4985-8e0b-fe4481264412', '23145876', 'Juan ', 'Perez', '1991-09-12', '', '', '', '2023-09-26 20:54:39.616197+00', true),
	('e617dbf3-cc21-475f-bbd2-152afedb1bd5', '30123456', 'Rodrigo', 'Salamanca', '1994-02-12', '34341456788', 'rp@gmail.com', NULL, '2023-10-17 10:24:45.686315+00', true),
	('28928402-295a-432a-8543-8786f9e1b489', '12312312', 'pelado', 'boton', '3123-02-12', '', '', NULL, '2023-10-19 11:15:18.850905+00', true),
	('d4cf0f0f-ce90-4205-8a0e-ab874582472a', '124225252', 'otro', 'jugador', '2002-12-12', '3434123345', '', '', '2023-09-26 21:45:59.096636+00', true),
	('82a10440-40d0-4128-b221-a5e44e44086b', '12233445', 'adad', 'ffaaf', '0041-04-13', '', '', NULL, '2023-12-28 15:05:42.730145+00', true),
	('bb8114f7-44ca-4244-89c7-1784919e72a4', '1413121', 'adsdd', 'asdafafa', '0441-12-14', '', '', NULL, '2023-12-28 15:14:51.6227+00', true),
	('c0fc1e36-10ba-4109-b420-44168738d78a', '12091209', 'asdad', 'asdad', '0014-12-13', '', '', NULL, '2023-12-28 18:31:25.263114+00', true);


--
-- Data for Name: sports; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."sports" ("id", "created_at", "name") VALUES
	('14629884-4bc6-48be-b3e2-2b41534c793e', '2023-09-26 20:46:43.772328+00', 'Basket'),
	('03af4c6d-d5ea-4d6e-a5d8-a93b3c6b4821', '2023-09-26 20:46:43.772328+00', 'Futbol 7'),
	('bf56cf74-5e5b-44ca-87ad-d2ad10d09282', '2023-09-26 20:46:43.772328+00', 'Futbol 11');


--
-- Data for Name: players_sports; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."players_sports" ("created_at", "federated", "player_id", "sport_id") VALUES
	('2023-09-26 21:09:50.292038+00', true, '445cc7e0-a636-406f-922f-d6588fcc0979', '14629884-4bc6-48be-b3e2-2b41534c793e'),
	('2023-09-26 21:09:50.292038+00', true, '445cc7e0-a636-406f-922f-d6588fcc0979', '03af4c6d-d5ea-4d6e-a5d8-a93b3c6b4821'),
	('2023-09-26 21:09:50.292038+00', false, '445cc7e0-a636-406f-922f-d6588fcc0979', 'bf56cf74-5e5b-44ca-87ad-d2ad10d09282'),
	('2023-10-10 13:21:25.03736+00', true, '01f54beb-1c68-4dd3-8e2e-defa3b711333', '14629884-4bc6-48be-b3e2-2b41534c793e'),
	('2023-10-10 13:21:25.03736+00', false, '01f54beb-1c68-4dd3-8e2e-defa3b711333', '03af4c6d-d5ea-4d6e-a5d8-a93b3c6b4821'),
	('2023-09-26 20:54:39.928886+00', false, '069d71d2-6211-4985-8e0b-fe4481264412', '14629884-4bc6-48be-b3e2-2b41534c793e'),
	('2023-10-17 10:24:48.834487+00', false, 'e617dbf3-cc21-475f-bbd2-152afedb1bd5', '14629884-4bc6-48be-b3e2-2b41534c793e'),
	('2023-10-17 10:24:48.834487+00', false, 'e617dbf3-cc21-475f-bbd2-152afedb1bd5', '03af4c6d-d5ea-4d6e-a5d8-a93b3c6b4821'),
	('2023-10-17 10:24:48.834487+00', false, 'e617dbf3-cc21-475f-bbd2-152afedb1bd5', 'bf56cf74-5e5b-44ca-87ad-d2ad10d09282'),
	('2023-10-19 11:15:19.1985+00', true, '28928402-295a-432a-8543-8786f9e1b489', '14629884-4bc6-48be-b3e2-2b41534c793e'),
	('2023-10-19 11:15:19.1985+00', true, '28928402-295a-432a-8543-8786f9e1b489', '03af4c6d-d5ea-4d6e-a5d8-a93b3c6b4821'),
	('2023-10-19 11:15:19.1985+00', true, '28928402-295a-432a-8543-8786f9e1b489', 'bf56cf74-5e5b-44ca-87ad-d2ad10d09282'),
	('2023-10-20 10:53:59.517231+00', false, 'd4cf0f0f-ce90-4205-8a0e-ab874582472a', '14629884-4bc6-48be-b3e2-2b41534c793e'),
	('2023-10-20 13:59:41.588283+00', false, 'd4cf0f0f-ce90-4205-8a0e-ab874582472a', '03af4c6d-d5ea-4d6e-a5d8-a93b3c6b4821'),
	('2023-10-20 13:59:41.588283+00', false, 'd4cf0f0f-ce90-4205-8a0e-ab874582472a', 'bf56cf74-5e5b-44ca-87ad-d2ad10d09282');


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."teams" ("created_at", "name", "sport_id", "id", "active") VALUES
	(NULL, 'okok', 'bf56cf74-5e5b-44ca-87ad-d2ad10d09282', '5f11dcab-b21d-48e9-8fa4-e5ae3230a821', true),
	(NULL, 'rossana', '03af4c6d-d5ea-4d6e-a5d8-a93b3c6b4821', '6ff741aa-145a-4796-bb71-e6b67aa77269', true),
	(NULL, 'nn', '14629884-4bc6-48be-b3e2-2b41534c793e', 'f1ce0e02-ff58-4c20-a802-e8217e452a48', true),
	('2023-10-23 21:14:26.532474+00', 'prueba1234', '14629884-4bc6-48be-b3e2-2b41534c793e', '24211dc4-7aba-4424-8932-e03f11dd5fba', true),
	('2023-12-27 13:32:10.374537+00', 'nuevo', 'bf56cf74-5e5b-44ca-87ad-d2ad10d09282', 'c4020f9f-1add-45de-9b3d-c284f6deec94', true);


--
-- Data for Name: players_teams; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('players', 'players', NULL, '2023-09-26 20:44:32.169615+00', '2023-09-26 20:44:32.169615+00', true, false, NULL, '{image/*}', NULL),
	('teams', 'teams', NULL, '2023-10-20 14:41:53.190441+00', '2023-10-20 14:41:53.190441+00', true, false, NULL, '{image/*}', NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") VALUES
	('d4caf8e1-623b-4d84-bbee-ebbc93fd6165', 'teams', 'public/Basket_nn', '6f73665c-2d24-4689-ad43-8e72766396a7', '2023-12-05 22:42:20.719656+00', '2023-12-05 22:42:20.719656+00', '2023-12-05 22:42:20.719656+00', '{"eTag": "\"97997ee4c6ca995f4fb93103191009b3\"", "size": 71410, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2023-12-05T22:42:21.000Z", "contentLength": 71410, "httpStatusCode": 200}', 'd7627316-0b24-4d41-a544-2d9d8a30835d', '6f73665c-2d24-4689-ad43-8e72766396a7'),
	('5b77bd39-5f55-4940-8c78-8c9a511c2e24', 'teams', 'public/Basket_prueba1234', '6f73665c-2d24-4689-ad43-8e72766396a7', '2023-12-06 13:26:55.060133+00', '2023-12-06 13:26:55.060133+00', '2023-12-06 13:26:55.060133+00', '{"eTag": "\"65f85c392001b66038dad0fd1ae132a5\"", "size": 39736, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-12-06T13:26:55.000Z", "contentLength": 39736, "httpStatusCode": 200}', '0f790897-5cee-4f49-8a6c-34c56c69185b', '6f73665c-2d24-4689-ad43-8e72766396a7'),
	('6f04d16c-8d29-4715-ba4d-b393c64955c9', 'players', 'public/12233445_adad_ffaaf', '6f73665c-2d24-4689-ad43-8e72766396a7', '2023-12-28 15:05:42.489408+00', '2023-12-28 15:05:42.489408+00', '2023-12-28 15:05:42.489408+00', '{"eTag": "\"4ddb7bfce2d97e37b8d07ad992e4a945\"", "size": 782709, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2023-12-28T15:05:43.000Z", "contentLength": 782709, "httpStatusCode": 200}', '8d38d207-dd93-453a-8de5-a675f09ad94a', '6f73665c-2d24-4689-ad43-8e72766396a7'),
	('2a6504ac-5e88-467f-8e06-c62ba187f2c4', 'players', 'public/1413121_adsdd_asdafafa.webp', '6f73665c-2d24-4689-ad43-8e72766396a7', '2023-12-28 15:14:51.389213+00', '2023-12-28 15:14:51.389213+00', '2023-12-28 15:14:51.389213+00', '{"eTag": "\"ac4ec82c456b84fe676b737ed2f1c09f\"", "size": 18486, "mimetype": "image/webp", "cacheControl": "max-age=3600", "lastModified": "2023-12-28T15:14:52.000Z", "contentLength": 18486, "httpStatusCode": 200}', '0888810e-2227-4281-a2d0-b63f6bdd0cea', '6f73665c-2d24-4689-ad43-8e72766396a7'),
	('a0b76b60-1735-41ba-a9a8-ea1c386c5871', 'players', 'public/39541243_augusto_rodriguez.webp', NULL, '2023-12-28 17:54:55.776046+00', '2023-12-28 17:54:55.776046+00', '2023-12-28 17:54:55.776046+00', '{"eTag": "\"4ddb7bfce2d97e37b8d07ad992e4a945\"", "size": 782709, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2023-12-28T17:54:56.000Z", "contentLength": 782709, "httpStatusCode": 200}', 'b77fab1f-896d-4a8a-a0a3-2f5eb2f8483d', NULL),
	('026761a6-8b9a-4b27-8cff-da9e6f2d0851', 'players', 'public/12091209_asdad_asdad.webp', '6f73665c-2d24-4689-ad43-8e72766396a7', '2023-12-28 18:31:24.982671+00', '2023-12-28 18:31:24.982671+00', '2023-12-28 18:31:24.982671+00', '{"eTag": "\"ac4ec82c456b84fe676b737ed2f1c09f\"", "size": 18486, "mimetype": "image/webp", "cacheControl": "max-age=3600", "lastModified": "2023-12-28T18:31:25.000Z", "contentLength": 18486, "httpStatusCode": 200}', 'd974d6b4-b2cc-4fd4-92e1-e75bf218052a', '6f73665c-2d24-4689-ad43-8e72766396a7');


--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 203, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
