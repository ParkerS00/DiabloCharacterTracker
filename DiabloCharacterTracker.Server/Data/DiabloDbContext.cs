using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DiabloCharacterTracker.Server.Data;

public partial class DiabloDbContext : DbContext
{
    public DiabloDbContext()
    {
    }

    public DiabloDbContext(DbContextOptions<DiabloDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Affix> Affixes { get; set; }

    public virtual DbSet<CharacterClass> CharacterClasses { get; set; }

    public virtual DbSet<CharacterItem> CharacterItems { get; set; }

    public virtual DbSet<CharacterSkill> CharacterSkills { get; set; }

    public virtual DbSet<Item> Items { get; set; }

    public virtual DbSet<ItemAffix> ItemAffixes { get; set; }

    public virtual DbSet<PlayableCharacter> PlayableCharacters { get; set; }

    public virtual DbSet<Skill> Skills { get; set; }

    public virtual DbSet<UserAccount> UserAccounts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Affix>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("affix_pkey");

            entity.ToTable("affix", "diablo");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AffixLabel).HasColumnName("affix_label");
            entity.Property(e => e.AffixName).HasColumnName("affix_name");
        });

        modelBuilder.Entity<CharacterClass>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("character_class_pkey");

            entity.ToTable("character_class", "diablo");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ClassName).HasColumnName("class_name");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.ItemSlots).HasColumnName("item_slots");
            entity.Property(e => e.Resource).HasColumnName("resource");
        });

        modelBuilder.Entity<CharacterItem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("character_item_pkey");

            entity.ToTable("character_item", "diablo");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ItemId).HasColumnName("item_id");
            entity.Property(e => e.PlayableCharacterId).HasColumnName("playable_character_id");

            entity.HasOne(d => d.Item).WithMany(p => p.CharacterItems)
                .HasForeignKey(d => d.ItemId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("character_item_item_id_fkey");

            entity.HasOne(d => d.PlayableCharacter).WithMany(p => p.CharacterItems)
                .HasForeignKey(d => d.PlayableCharacterId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("character_item_playable_character_id_fkey");
        });

        modelBuilder.Entity<CharacterSkill>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("character_skill_pkey");

            entity.ToTable("character_skill", "diablo");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.PlayableCharacterId).HasColumnName("playable_character_id");
            entity.Property(e => e.SkillId).HasColumnName("skill_id");

            entity.HasOne(d => d.PlayableCharacter).WithMany(p => p.CharacterSkills)
                .HasForeignKey(d => d.PlayableCharacterId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("character_skill_playable_character_id_fkey");

            entity.HasOne(d => d.Skill).WithMany(p => p.CharacterSkills)
                .HasForeignKey(d => d.SkillId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("character_skill_skill_id_fkey");
        });

        modelBuilder.Entity<Item>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("item_pkey");

            entity.ToTable("item", "diablo");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.IsMythic).HasColumnName("is_mythic");
            entity.Property(e => e.ItemName).HasColumnName("item_name");
            entity.Property(e => e.Slot).HasColumnName("slot");
        });

        modelBuilder.Entity<ItemAffix>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("item_affix_pkey");

            entity.ToTable("item_affix", "diablo");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AffixId).HasColumnName("affix_id");
            entity.Property(e => e.ItemId).HasColumnName("item_id");

            entity.HasOne(d => d.Affix).WithMany(p => p.ItemAffixes)
                .HasForeignKey(d => d.AffixId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("item_affix_affix_id_fkey");

            entity.HasOne(d => d.Item).WithMany(p => p.ItemAffixes)
                .HasForeignKey(d => d.ItemId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("item_affix_item_id_fkey");
        });

        modelBuilder.Entity<PlayableCharacter>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("playable_character_pkey");

            entity.ToTable("playable_character", "diablo");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CharacterClassId).HasColumnName("character_class_id");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.UserAccountId).HasColumnName("user_account_id");

            entity.HasOne(d => d.CharacterClass).WithMany(p => p.PlayableCharacters)
                .HasForeignKey(d => d.CharacterClassId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("playable_character_character_class_id_fkey");

            entity.HasOne(d => d.UserAccount).WithMany(p => p.PlayableCharacters)
                .HasForeignKey(d => d.UserAccountId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("playable_character_user_account_id_fkey");
        });

        modelBuilder.Entity<Skill>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("skill_pkey");

            entity.ToTable("skill", "diablo");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.IsPassive).HasColumnName("is_passive");
            entity.Property(e => e.IsUltimate).HasColumnName("is_ultimate");
            entity.Property(e => e.MaxPointsAlloted).HasColumnName("max_points_alloted");
            entity.Property(e => e.SkillName).HasColumnName("skill_name");
        });

        modelBuilder.Entity<UserAccount>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("user_account_pkey");

            entity.ToTable("user_account", "diablo");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.FirstName).HasColumnName("first_name");
            entity.Property(e => e.LastName).HasColumnName("last_name");
        });

        base.OnModelCreating(modelBuilder);
    }

}
