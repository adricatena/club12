create table "public"."players" (
    "id" uuid not null default gen_random_uuid(),
    "dni" bigint not null,
    "name" text not null,
    "lastname" text not null,
    "birthdate" date not null,
    "cellphone" text,
    "email" text,
    "observations" text,
    "created_at" timestamp with time zone default now()
);


alter table "public"."players" enable row level security;

create table "public"."players_sports" (
    "created_at" timestamp with time zone default now(),
    "federated" boolean not null default false,
    "player_id" uuid not null,
    "sport_id" uuid not null
);


alter table "public"."players_sports" enable row level security;

create table "public"."players_teams" (
    "created_at" timestamp with time zone default now(),
    "player_id" uuid not null,
    "team_id" uuid not null
);


alter table "public"."players_teams" enable row level security;

create table "public"."sports" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default now(),
    "name" text not null
);


alter table "public"."sports" enable row level security;

create table "public"."teams" (
    "created_at" timestamp with time zone default now(),
    "name" text not null,
    "sport_id" uuid not null,
    "id" uuid not null default gen_random_uuid()
);


alter table "public"."teams" enable row level security;

CREATE UNIQUE INDEX players_pkey ON public.players USING btree (id);

CREATE UNIQUE INDEX players_sports_pkey ON public.players_sports USING btree (player_id, sport_id);

CREATE UNIQUE INDEX players_teams_pkey ON public.players_teams USING btree (player_id, team_id);

CREATE UNIQUE INDEX sports_pkey ON public.sports USING btree (id);

CREATE UNIQUE INDEX teams_pkey ON public.teams USING btree (id);

alter table "public"."players" add constraint "players_pkey" PRIMARY KEY using index "players_pkey";

alter table "public"."players_sports" add constraint "players_sports_pkey" PRIMARY KEY using index "players_sports_pkey";

alter table "public"."players_teams" add constraint "players_teams_pkey" PRIMARY KEY using index "players_teams_pkey";

alter table "public"."sports" add constraint "sports_pkey" PRIMARY KEY using index "sports_pkey";

alter table "public"."teams" add constraint "teams_pkey" PRIMARY KEY using index "teams_pkey";

alter table "public"."players_sports" add constraint "players_sports_player_id_fkey" FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE not valid;

alter table "public"."players_sports" validate constraint "players_sports_player_id_fkey";

alter table "public"."players_sports" add constraint "players_sports_sport_id_fkey" FOREIGN KEY (sport_id) REFERENCES sports(id) ON DELETE CASCADE not valid;

alter table "public"."players_sports" validate constraint "players_sports_sport_id_fkey";

alter table "public"."players_teams" add constraint "players_teams_player_id_fkey" FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE not valid;

alter table "public"."players_teams" validate constraint "players_teams_player_id_fkey";

alter table "public"."players_teams" add constraint "players_teams_team_id_fkey" FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL not valid;

alter table "public"."players_teams" validate constraint "players_teams_team_id_fkey";

alter table "public"."teams" add constraint "teams_sport_id_fkey" FOREIGN KEY (sport_id) REFERENCES sports(id) not valid;

alter table "public"."teams" validate constraint "teams_sport_id_fkey";

create policy "Enable insert for authenticated users only"
on "public"."players"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."players"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "public"."players_sports"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."sports"
as permissive
for select
to public
using (true);



