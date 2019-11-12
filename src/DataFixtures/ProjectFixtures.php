<?php

namespace App\DataFixtures;

use App\Entity\Project;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class ProjectFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for($i=1; $i<=80; $i++) {

            $project = new Project();
            $project->setName("Project " . $i);
            $project->setDescription('Blablabla');
            $project->setDate(new DateTime());
            $manager->persist($project);
        }

        $manager->flush();
    }
}
